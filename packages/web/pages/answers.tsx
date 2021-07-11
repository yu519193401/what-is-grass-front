import AnswerList from '../components/AnswerList';
import { useGetAnswersQuery } from '@what-is-grass/shared';

const QuestionAnswer: React.FC = () => {
  const getIndexId = () => {
    return 1;
  };
  const indexId = getIndexId();
  const { data, isLoading } = useGetAnswersQuery({ index_id: indexId });

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
