import AnswerList from '../../components/AnswerList';
import { useLazyGetAnswersQuery } from '@what-is-grass/shared';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const QuestionAnswer: React.FC = () => {
  const [triggerGetAnswersQuery, { data, isLoading }] =
    useLazyGetAnswersQuery();
  const { query, isReady } = useRouter();
  const indexId = query.id as string;

  useEffect(() => {
    if (isReady) {
      triggerGetAnswersQuery({ index_id: +indexId });
    }
  }, [isReady]);

  return (
    <div>
      <h1>ここは質問回答覧</h1>
      <button>回答</button>
      <div>{data && <AnswerList answers={data} />}</div>
      {isLoading ? 'ロード中...' : null}
    </div>
  );
};

export default QuestionAnswer;
