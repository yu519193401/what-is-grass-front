import React, { useState } from 'react';

type Props = {
  setQuestions: (questions: never[]) => void;
};

const SearchBar: React.FC<Props> = (props) => {
  const [keyword, setSearch] = useState('');
  const [languageId, setLanguageId] = useState('');
  const [includeNoAnswerId, setIncludeNoAnswerId] = useState('');
  const [sortId, setSortId] = useState('');

  async function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const res = await fetch(
      `/question?keyword=${keyword}&sort=${sortId}&language_id=${languageId}&include_no_answer=${includeNoAnswerId}`
    );
    const data = await res.json();
    props.setQuestions(data.indices);
  }

  function handleKeywordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value.toLowerCase());
  }

  function handleLanguageIdChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setLanguageId(event.target.value);
  }

  function handleSortIdChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSortId(event.target.value);
  }

  function handleIncludeNoAnswerIdChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setIncludeNoAnswerId(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="search-box">
          <div className="search-input">
            <input
              placeholder="なんかを聞きたいの？"
              aria-label="なんかを聞きたいの？"
              onChange={handleKeywordChange}
            />

            <input type="submit" value="検索" />
          </div>
        </div>
        <div>
          <select className="search-lauguage" onChange={handleLanguageIdChange}>
            <option value="1">日本語</option>
            <option value="2">英語</option>
          </select>
        </div>
        <div>
          <select className="sort" onChange={handleSortIdChange}>
            <option value="1">日付</option>
            <option value="2">役立Count</option>
            <option value="3">回答者数</option>
          </select>
        </div>
        <div>
          <select
            className="include_no_answer"
            onChange={handleIncludeNoAnswerIdChange}
          >
            <option value="1">全て</option>
            <option value="2">回答あり</option>
            <option value="3">回答なし</option>
          </select>
        </div>
      </form>
      <button
        className="float-right"
        onClick={() => {
          console.log('A');
        }}
      >
        質問
      </button>
    </div>
  );
};

export default SearchBar;
