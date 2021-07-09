export type Index = {
  index_id: number;
  index: string;
  questioner: string;
  frequently_used_count: number;
  answer_count: number;
  language_id: number;
  best_answer: string;
  date: string;
};

export type NewIndexResponse = Omit<Index, 'best_answer'>;
export type NewIndexRequest = Pick<Index, 'index' | 'language_id'>;
