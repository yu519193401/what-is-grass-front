import React from 'react';
import { Answer } from '@what-is-grass/shared';

type Props = Answer;

const AnswerItem: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>
        回答する見出しのid{props.index_id} {props.answer_id}
      </h2>
      <p>
        回答内容：{props.definition}
        {props.origin}
      </p>
      <p>回答者のid： {props.user_id}</p>
      <p>
        役に立った回数:{props.informative_count}/{props.date}
      </p>
    </div>
  );
};
export default AnswerItem;
