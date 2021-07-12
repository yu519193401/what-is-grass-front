import React from 'react';
import { Index } from '@what-is-grass/shared';
import Link from 'next/link';

type Props = {
  question: Index;
};

const IndexItem: React.FC<Props> = ({ question }) => {
  return (
    <Link href={`/answers/${question.index_id}`}>
      <div>
        <h4>
          {question.questioner}:{question.index}
        </h4>

        <div>{question.best_answer}</div>
        <div>
          いいね：{question.frequently_used_count},回答数{question.answer_count}
        </div>
        <div>{question.date}</div>
      </div>
    </Link>
  );
};

export default IndexItem;
