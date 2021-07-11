export type Answer = {
  answer_id: number;
  user_id: number;
  informative_count: number;
  index_id: number;
  definition: string;
  origin: string;
  example: Example[];
  note: string;
  date: string;
};

export type NewAnswerRequest = {
  index_id: Answer['index_id'];
  definition: Answer['definition'];
  origin?: Answer['origin'];
  note?: Answer['note'];
  example?: Pick<Example, 'example_sentence'>[];
};
export type NewAnswerResponse = Answer;

export type Example = {
  example_id: number;
  example_sentence: string;
};
