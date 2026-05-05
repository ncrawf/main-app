import type { Question } from '../../types';

export const candidacyResultQuestions: Question[] = [
  {
    question_id: 'qb.universal.candidacy_result.primary_v1',
    question_version: '1.0.0',
    tier: 1,
    answer_type: 'educational_screen',
    requiredness: 'not_applicable',
    answer_role: 'operational',
    intent_of_answer_set: 'result_display',
    entity_kind: 'single_value',
    atom_kind: 'candidacy_result',
    downstream_effect: 'hard_stop',
    render_when: null,
    prompt: 'Eligibility check',
    helper: 'Result depends on patient state and rule outputs.',
    emissions: [
      {
        target: 'eligibility_decision',
        payload: { pathway_code: '', rule_id: '', rule_version: '', result: 'eligible', reasons: [], input_refs: [], inputs_hash: '', decided_by: 'rule_engine' },
      },
    ],
  },
];
