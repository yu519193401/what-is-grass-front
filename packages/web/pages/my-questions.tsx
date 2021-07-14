import Layout from '../components/Layout';
import React, { useState } from 'react';
import IndexItem from '../components/IndexItem';
import { useGetUserIndicesQuery } from '@what-is-grass/shared';

const MyQuestions: React.FC = () => {
  const [languageId, setLanguageId] = useState<number | null>(null);
  const [includeNoAnswerId, setIncludeNoAnswerId] = useState(1);
  const [sortId, setSortId] = useState(1);

  const reqestBody = {
    languageId: languageId || void 0,
    include_no_answer: includeNoAnswerId,
    sort: sortId,
  };
  const { data: questions } = useGetUserIndicesQuery(reqestBody);

  const handleLanguageIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageId(+e.target.value);
  };

  const handleIncludeNoAnswerIdChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setIncludeNoAnswerId(+e.target.value);
  };

  const handleSortIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortId(+e.target.value);
  };

  return (
    <Layout title="Search">
      <h1>質問した見出し一覧</h1>
      <label>
        言語で絞る:
        <select
          className="search-lauguage"
          value={languageId || 1}
          onChange={handleLanguageIdChange}
        >
          <option value="1">日本語</option>
          <option value="2">英語</option>
        </select>
      </label>
      <br />
      <label>
        並び替え:
        <select className="sort" value={sortId} onChange={handleSortIdChange}>
          <option value="1">日付</option>
          <option value="2">役立Count</option>
          <option value="3">回答者数</option>
        </select>
      </label>
      <br />
      <label>
        回答状況で絞る:
        <select
          className="include_no_answer"
          value={includeNoAnswerId}
          onChange={handleIncludeNoAnswerIdChange}
        >
          <option value="1">全て</option>
          <option value="2">回答あり</option>
          <option value="3">回答なし</option>
        </select>
      </label>
      {questions &&
        questions.map((question) => (
          <IndexItem key={question.index_id} question={question} />
        ))}
    </Layout>
  );
};
export default MyQuestions;
