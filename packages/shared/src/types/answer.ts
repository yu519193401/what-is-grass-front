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

export type NewAnswerRequest = Partial<
  Pick<Answer, 'index_id' | 'definition' | 'origin' | 'note'>
> &
  Pick<Answer, 'index_id' | 'definition'> & {
    example?: Omit<Example, 'example_id'>[];
  };
export type NewAnswerResponse = Answer;

export type Example = {
  example_id: number;
  example_sentence: string;
};
