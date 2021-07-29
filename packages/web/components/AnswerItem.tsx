import React from 'react';
import { Answer } from '@what-is-grass/shared';

type Props = Answer;

const AnswerItem: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="absolute top-40 left-20 w-1/2 h-96 p-40 bg-green-500 bg-opacity-50 box-border shadow-sm rounded-tl-lg rounded-br-lg">
        <div className="">
          <p>
            回答する見出しのid{props.index_id} {props.answer_id}
            回答内容：{props.definition}
            {props.origin}
          </p>
          <p>回答者のid： {props.user_id}</p>
          <p>
            役に立った回数:{props.informative_count}/{props.date}
          </p>
        </div>
      </div>
      <div className="absolute top-40 right-20 w-1/2 h-96 p-40 bg-yellow-500 bg-opacity-50 box-border shadow-sm rounded-tl-lg rounded-br-lg">
        <p> 例文</p>
      </div>
      <div></div>
    </div>
  );
};
export default AnswerItem;
