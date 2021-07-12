import React from 'react';
import IndexItem from './IndexItem';

type Props = {
  questions: {
    index_id: number;
    index: string;
    questioner: string;
    frequently_used_count: number;
    answer_count: number;
    best_answer: string;
    date: string;
  }[];
};

const ListContainer: React.FC<Props> = (props) => {
  return (
    <div>
      {props.questions.map((question) => {
        return (
          <IndexItem
            key={question.index_id}
            index={question.index}
            questioner={question.questioner}
            frequently_used_count={question.frequently_used_count}
            answer_count={question.answer_count}
            best_answer={question.best_answer}
            date={question.date}
          />
        );
      })}
    </div>
  );
};

export default ListContainer;
