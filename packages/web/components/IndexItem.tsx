import React from 'react';

type Props = {
  index: string;
  questioner: string;
  frequently_used_count: number;
  answer_count: number;
  best_answer: string;
  date: string;
};

const IndexItem: React.FC<Props> = (props) => {
  return (
    <a title="クリックして回答する">
      <div>
        <h4>
          {props.questioner}:{props.index}
        </h4>

        <div>{props.best_answer}</div>
        <div>
          いいね：{props.frequently_used_count},回答数{props.answer_count}
        </div>
        <div>{props.date}</div>
      </div>
    </a>
  );
};

export default IndexItem;
