import AnswerList from '../components/AnswerList';
import { useGetAnswersQuery } from '@what-is-grass/shared';
import Layout from '../components/Layout';

const QuestionAnswer: React.FC = () => {
  const getIndexId = () => {
    return 1;
  };
  const indexId = getIndexId();
  const { data, isLoading } = useGetAnswersQuery({ index_id: indexId });

  return (
    <Layout>
      <div className="w-full bg-green-200 ">
        <div className="space-x-4">
          <div className=" inline-block ml-10 mt-10 text-3xl font-bold ">
            <h1>ここは見出しです</h1>
          </div>
          <div className="inline relative left-1/2 duration-300 ease-in-out py-2 px-4 bg-green-500 rounded text-white font-normal focus:outline-none  hover:bg-green-600 active:bg-green-800">
            <button>回答</button>
          </div>
        </div>
      </div>
      <div className="pt-6">{data && <AnswerList answers={data} />}</div>
      {isLoading ? 'ロード中...' : null}
    </Layout>
  );
};

export default QuestionAnswer;
