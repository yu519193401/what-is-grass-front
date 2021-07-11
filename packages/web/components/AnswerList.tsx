import React from 'react';
import AnswerItem from '../components/AnswerItem';
import { Answer } from '@what-is-grass/shared';

type Props = {
  answers: Answer[];
};

const AnswerList: React.FC<Props> = (props) => {
  return (
    <div>
      {props.answers.map((answer) => {
        return <AnswerItem key={answer.index_id} {...answer} />;
      })}
    </div>
  );
};

export default AnswerList;
