import { useEffect, useState } from 'react';
import AnswerList from '../components/AnswerList';

const QuestionAnswer: React.FC = () => {
  const [answers, setAnswers] = useState([]);

  const getIndexId = () => {
    return 1;
  };
  const indexId = getIndexId();

  useEffect(() => {
    const callAnswer = async () => {
      const res = await fetch('/answer?index_id=' + indexId);
      const data = await res.json();
      setAnswers(data.answer);
    };
    callAnswer();
  }, []);

  return (
    <div>
      <h1>ここは質問回答覧</h1>
      <button>回答</button>
      <div>
        <AnswerList answers={answers} />
      </div>
    </div>
  );
};

export default QuestionAnswer;
