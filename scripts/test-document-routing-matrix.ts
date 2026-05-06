/**
 * Phase 4D Section 1O — pure-function unit test for the document routing matrix.
 *
 * No DB, no network. Validates that:
 *   1. Every INPUT_TYPES value has a DOMAIN_TARGETS entry in the matrix.
 *   2. Every value in INPUT_TYPE_TO_DOMAIN_TARGET points at a valid DomainTarget.
 *   3. The 7 user-facing artifact categories from the companion doc map
 *      cell-by-cell to declared input_types and domain targets.
 *   4. Sensitivity tier assignment is consistent (identity = strictest;
 *      insurance = strict; everything else = standard_clinical).
 *   5. routingTargetForInputType() is referentially equal to the matrix entry.
 *   6. Allowed-MIME guard accepts the documented allowlist + rejects the rest.
 *   7. RoutePatientDocumentArgs Zod schema accepts a happy-path payload + rejects
 *      invalid input_type / capture_surface.
 *
 * Run with: npx tsx scripts/test-document-routing-matrix.ts
 */

import {
  INPUT_TYPES,
  DOMAIN_TARGETS,
  INPUT_TYPE_TO_DOMAIN_TARGET,
  INPUT_TYPE_TO_SENSITIVITY,
  ALLOWED_MIME_TYPES,
  isAllowedMimeType,
  RoutePatientDocumentArgs,
  type InputType,
} from '../lib/intake/documents/types';
import { routingTargetForInputType } from '../lib/intake/documents/route-patient-document';

let passes = 0;
let failures = 0;

function pass(label: string): void {
  console.log(`  PASS — ${label}`);
  passes++;
}
function fail(label: string, msg: string): void {
  console.error(`  FAIL — ${label}: ${msg}`);
  failures++;
}
function assert(cond: boolean, label: string, msg: string): void {
  if (cond) pass(label);
  else fail(label, msg);
}

// ---------------------------------------------------------------------
// Test 1: Every INPUT_TYPE has a routing matrix entry
// ---------------------------------------------------------------------
console.log('[test 1] Matrix completeness — every INPUT_TYPE maps to a DOMAIN_TARGET');
for (const it of INPUT_TYPES) {
  const target = INPUT_TYPE_TO_DOMAIN_TARGET[it];
  assert(target !== undefined, `${it} has matrix entry`, `missing entry`);
}

// ---------------------------------------------------------------------
// Test 2: All matrix targets are valid DomainTarget values
// ---------------------------------------------------------------------
console.log('[test 2] Matrix referential integrity — every target value is in DOMAIN_TARGETS');
for (const it of INPUT_TYPES) {
  const target = INPUT_TYPE_TO_DOMAIN_TARGET[it];
  assert(
    (DOMAIN_TARGETS as readonly string[]).includes(target),
    `${it} → ${target} is a valid DomainTarget`,
    `target '${target}' not in DOMAIN_TARGETS`
  );
}

// ---------------------------------------------------------------------
// Test 3: User's 7 artifact categories map cell-by-cell
// (per companion doc Section 4 + Phase 4B-arch user request)
// ---------------------------------------------------------------------
console.log('[test 3] User category coverage — 7 artifact categories map to canonical input types');
const categoryChecks: Array<{ category: string; input_type: InputType; expected_target: string }> = [
  { category: 'identity (drivers license)', input_type: 'drivers_license_front', expected_target: 'patient_identity_verifications' },
  { category: 'identity (selfie)', input_type: 'selfie_face_verification', expected_target: 'patient_identity_verifications' },
  { category: 'clinical (lab PDF)', input_type: 'lab_document', expected_target: 'patient_diagnostic_reports' },
  { category: 'patient photos (clinical media)', input_type: 'clinical_media_photo', expected_target: 'external_clinical_documents' },
  { category: 'insurance / admin (card)', input_type: 'insurance_card_front', expected_target: 'payer_eligibility_documents' },
  { category: 'medication evidence', input_type: 'current_medication_photo', expected_target: 'external_clinical_documents' },
  { category: 'general medical record', input_type: 'general_medical_record', expected_target: 'external_clinical_documents' },
];
for (const c of categoryChecks) {
  const target = INPUT_TYPE_TO_DOMAIN_TARGET[c.input_type];
  assert(
    target === c.expected_target,
    `${c.category} → ${c.expected_target}`,
    `expected ${c.expected_target}, got ${target}`
  );
}

// ---------------------------------------------------------------------
// Test 4: Sensitivity tier assignment
// ---------------------------------------------------------------------
console.log('[test 4] Sensitivity tier — identity=strictest, insurance=strict, rest=standard_clinical');

const expectedStrictest: InputType[] = [
  'government_id_front', 'government_id_back',
  'drivers_license_front', 'drivers_license_back',
  'selfie_face_verification',
];
for (const it of expectedStrictest) {
  assert(
    INPUT_TYPE_TO_SENSITIVITY[it] === 'strictest',
    `${it} is strictest`,
    `got ${INPUT_TYPE_TO_SENSITIVITY[it]}`
  );
}

const expectedStrict: InputType[] = [
  'insurance_card_front', 'insurance_card_back', 'payer_eligibility_document',
];
for (const it of expectedStrict) {
  assert(
    INPUT_TYPE_TO_SENSITIVITY[it] === 'strict',
    `${it} is strict`,
    `got ${INPUT_TYPE_TO_SENSITIVITY[it]}`
  );
}

const expectedStandard: InputType[] = [
  'lab_document', 'prior_lab_report', 'lab_intent_to_order', 'lab_completion_evidence',
  'current_medication_photo', 'supplement_stack_photo', 'clinical_media_photo',
  'general_medical_record', 'unclassified_pending_review',
];
for (const it of expectedStandard) {
  assert(
    INPUT_TYPE_TO_SENSITIVITY[it] === 'standard_clinical',
    `${it} is standard_clinical`,
    `got ${INPUT_TYPE_TO_SENSITIVITY[it]}`
  );
}

// ---------------------------------------------------------------------
// Test 5: routingTargetForInputType() helper agrees with the matrix
// ---------------------------------------------------------------------
console.log('[test 5] routingTargetForInputType() helper matches matrix');
for (const it of INPUT_TYPES) {
  const expected = INPUT_TYPE_TO_DOMAIN_TARGET[it];
  const actual = routingTargetForInputType(it);
  assert(actual === expected, `helper(${it}) === matrix[${it}]`, `expected ${expected}, got ${actual}`);
}

// ---------------------------------------------------------------------
// Test 6: MIME guard accepts allowlist + rejects others
// ---------------------------------------------------------------------
console.log('[test 6] isAllowedMimeType — allowlist accepted; everything else rejected');
for (const m of ALLOWED_MIME_TYPES) {
  assert(isAllowedMimeType(m), `accepts ${m}`, `rejected unexpectedly`);
}
const rejectedSamples = [
  'application/octet-stream',
  'image/svg+xml',                   // explicitly NOT allowed (XSS surface)
  'video/mp4',                       // future media-with-transcript pattern; not in v1 scope
  'audio/mpeg',
  'application/zip',
  'text/html',
];
for (const m of rejectedSamples) {
  assert(!isAllowedMimeType(m), `rejects ${m}`, `accepted unexpectedly`);
}

// ---------------------------------------------------------------------
// Test 7: Zod schema validates happy-path + rejects invalid
// ---------------------------------------------------------------------
console.log('[test 7] RoutePatientDocumentArgs Zod schema');

const VALID_UUID = '11111111-1111-4111-8111-111111111111';

const happy = RoutePatientDocumentArgs.safeParse({
  patient_id: VALID_UUID,
  input_type: 'lab_document',
  capture_surface: 'intake',
  capture_source_id: 'session-abc',
  file_bytes: new Uint8Array([0x25, 0x50, 0x44, 0x46]),     // %PDF magic header
  file_name: 'lab.pdf',
  mime_type: 'application/pdf',
  size_bytes: 4,
  uploaded_by: 'patient',
});
assert(happy.success, 'happy-path payload accepted', happy.success ? '' : JSON.stringify(happy.error.issues));

const badInputType = RoutePatientDocumentArgs.safeParse({
  patient_id: VALID_UUID,
  input_type: 'not_a_real_input_type',
  capture_surface: 'intake',
  uploaded_by: 'patient',
});
assert(!badInputType.success, 'invalid input_type rejected', 'unexpectedly accepted');

const badCaptureSurface = RoutePatientDocumentArgs.safeParse({
  patient_id: VALID_UUID,
  input_type: 'lab_document',
  capture_surface: 'browser_drag_drop',
  uploaded_by: 'patient',
});
assert(!badCaptureSurface.success, 'invalid capture_surface rejected', 'unexpectedly accepted');

const noFileForLabIntent = RoutePatientDocumentArgs.safeParse({
  input_type: 'lab_intent_to_order',
  capture_surface: 'intake',
  uploaded_by: 'patient',
});
assert(noFileForLabIntent.success, 'lab_intent_to_order without file accepted (structured signal)', 'rejected');

console.log('');
console.log(`Phase 4D document routing matrix: ${passes} passed, ${failures} failed.`);
if (failures > 0) process.exit(1);
console.log('GREEN — input_type → domain_target routing matrix locked.');
