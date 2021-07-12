import Layout from '../components/Layout';
import React, { useState } from 'react';
import { useAddIndexMutation } from '@what-is-grass/shared';

const getLanguages = () => [
  {
    id: 1,
    language: '英語',
  },
  {
    id: 2,
    language: '日本語',
  },
];

const IndexPage: React.FC = () => {
  const [index, setIndex] = useState('');
  const [languageId, setLanguageId] = useState<string | null>(null);
  const [addPost, { isLoading }] = useAddIndexMutation();

  const handleIndexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndex(e.target.value);
  };

  const handleLanguageIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageId(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    addPost({ language_id: +(languageId || 1), index });
  };

  return (
    <Layout title="New Question">
      <h1>知りたい言葉を質問をしよう</h1>
      <form onSubmit={handleSubmit}>
        <label>
          この言葉は何語?:
          <select value={languageId ?? ''} onChange={handleLanguageIdChange}>
            {getLanguages().map((l) => (
              <option key={l.id} value={l.id}>
                {l.language}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          質問:
          <input type="text" value={index} onChange={handleIndexChange} />
          とはどういう意味ですか
        </label>
        <br />
        <input
          type="submit"
          disabled={isLoading}
          aria-label="質問を投稿"
          value="投稿"
        />
        {isLoading ? '送信中...' : null}
      </form>
    </Layout>
  );
};

export default IndexPage;
