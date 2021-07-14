import Layout from '../components/Layout';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import IndexItem from '../components/IndexItem';
import { Index } from '@what-is-grass/shared';

const Search: React.FC = () => {
  const [questions, setQuestions] = useState<Index[]>([]);

  const updateQuestion = (questions: Index[]) => {
    setQuestions(questions);
  };

  return (
    <Layout title="Search">
      <h1>ここは検索画面だよ！！</h1>
      <hr />
      <SearchBar setQuestions={updateQuestion} />
      {questions.map((question) => (
        <IndexItem key={question.index_id} question={question} />
      ))}
    </Layout>
  );
};
export default Search;
