/**
 * Phase 4D Section 1O document routing barrel export.
 */

export {
  INPUT_TYPES,
  DOMAIN_TARGETS,
  INPUT_TYPE_TO_DOMAIN_TARGET,
  SENSITIVITY_TIERS,
  INPUT_TYPE_TO_SENSITIVITY,
  CAPTURE_SURFACES,
  ALLOWED_MIME_TYPES,
  ROUTING_STATUSES,
  UPLOADED_BY_KINDS,
  CORRECTION_REASONS,
  isAllowedMimeType,
  RoutePatientDocumentArgs,
  type InputType,
  type DomainTarget,
  type SensitivityTier,
  type CaptureSurface,
  type AllowedMimeType,
  type RoutingStatus,
  type UploadedByKind,
  type CorrectionReason,
  type RoutePatientDocumentResult,
} from './types';

export { routePatientDocument, routingTargetForInputType } from './route-patient-document';
