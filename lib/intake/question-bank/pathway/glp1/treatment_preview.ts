import type { Question } from '../../../types';

export const treatmentPreviewQuestions: Question[] = [
  {
    question_id: 'qb.pathway.glp1.treatment_preview.carousel_v1',
    question_version: '1.0.0',
    tier: 3,
    answer_type: 'educational_screen',
    requiredness: 'not_applicable',
    answer_role: 'educational_trust',
    intent_of_answer_set: 'trust_building',
    entity_kind: 'single_value',
    downstream_effect: 'none',
    render_when: null,
    prompt: 'Here are some GLP-1s a provider may recommend',
    emissions: [{ target: 'audit_event_only', payload: { action: 'intake.educational_screen.continued', resource_type: 'intake_session' } }],
  },
];
