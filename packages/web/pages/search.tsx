import Layout from '../components/Layout';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ListContainer from '../components/ListContainer';
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
      <ListContainer questions={questions} />
    </Layout>
  );
};
export default Search;
