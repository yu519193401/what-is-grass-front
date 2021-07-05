import React from 'react';

type Props = {
  answer_id: number;
  user_id: number;
  index_id: string;
  origin: string;
  informative_count: number;
  definition: string;
  date: string;
};

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
