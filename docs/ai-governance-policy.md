# AI Governance Policy (Clinical Interpretation)

This project treats AI as a clinician-assist layer, not an autonomous clinical actor.

## Core Boundaries

- AI may generate draft summaries, risk flags, and draft recommendations.
- AI may not autonomously:
  - change medications, orders, or workflow status
  - send clinical directives to patients
  - mark critical clinical tasks complete

## Patient Visibility Rule

- Patient-facing pathway recommendations are visible only when review status is `reviewed_accepted`.
- Draft, rejected, or superseded outputs remain internal to the provider workspace.

## Required Audit Fields

Each recommendation lifecycle must preserve:

- model provider + version
- generation timestamp
- trigger event context
- clinician reviewer and review timestamp
- acceptance/rejection note

## Confidence Handling

- Confidence values are clamped to `[0,1]` before persistence.
- Low-confidence extraction should be represented as verification work, not automatic chart truth.

## HIPAA and Access

- Use BAA-backed services for PHI processing.
- Restrict access to raw clinical files to staff-authorized contexts.
- Persist immutable review history for medico-legal traceability.
