import type { Question } from '../../types';

export const smartLoadingQuestions: Question[] = [
  {
    question_id: 'qb.universal.smart_loading.primary_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'educational_screen',
    requiredness: 'not_applicable',
    answer_role: 'operational',
    intent_of_answer_set: 'progress_indication',
    entity_kind: 'single_value',
    downstream_effect: 'none',
    render_when: null,
    prompt: 'Analyzing your responses...',
    emissions: [{ target: 'audit_event_only', payload: { action: 'intake.smart_loading.shown', resource_type: 'intake_session' } }],
  },
];
