import React from 'react';
import AnswerItem from '../components/AnswerItem';

type Props = {
  answers: {
    answer_id: number;
    user_id: number;
    index_id: string;
    origin: string;
    informative_count: number;
    definition: string;
    date: string;
  }[];
};

const AnswerList: React.FC<Props> = (props) => {
  return (
    <div>
      {props.answers.map((answer) => {
        return (
          <AnswerItem
            key={answer.index_id}
            answer_id={answer.answer_id}
            user_id={answer.user_id}
            index_id={answer.index_id}
            origin={answer.origin}
            informative_count={answer.informative_count}
            definition={answer.definition}
            date={answer.date}
          />
        );
      })}
    </div>
  );
};

export default AnswerList;
