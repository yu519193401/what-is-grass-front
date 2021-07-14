import React, { useState } from 'react';
import {
  searchTriggered,
  useSelector,
  useDispatch,
  useGetIndicesQuery,
  Index,
} from '@what-is-grass/shared';
import { useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import { useRouter } from 'next/router';

type Props = {
  setQuestions: (questions: Index[]) => void;
};

const SearchBar: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const latestSearchRequest = useSelector(
    (state) => state.questions.latestSearchRequest,
    shallowEqual
  );

  const [keyword, setSearch] = useState(latestSearchRequest?.keyword ?? '');
  const [languageId, setLanguageId] = useState(
    latestSearchRequest?.language_id ?? 1
  );
  const [includeNoAnswerId, setIncludeNoAnswerId] = useState(
    latestSearchRequest?.include_no_answer ?? 1
  );
  const [sortId, setSortId] = useState(latestSearchRequest?.sort ?? 1);

  const { data, isLoading } = useGetIndicesQuery(latestSearchRequest!, {
    skip: latestSearchRequest === null,
  });

  const router = useRouter();

  useEffect(() => {
    data && props.setQuestions(data);
  }, [data]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = {
      keyword,
      language_id: languageId,
      include_no_answer: includeNoAnswerId,
      sort: sortId,
    };

    dispatch(searchTriggered(body));
  }

  function handleKeywordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value.toLowerCase());
  }

  function handleLanguageIdChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setLanguageId(+event.target.value);
  }

  function handleSortIdChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSortId(+event.target.value);
  }

  function handleIncludeNoAnswerIdChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setIncludeNoAnswerId(+event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="search-box">
          <div className="search-input">
            <input
              placeholder="なんかを聞きたいの？"
              aria-label="なんかを聞きたいの？"
              value={keyword}
              onChange={handleKeywordChange}
            />
            <input type="submit" value="検索" disabled={isLoading} />
          </div>
        </div>
        <div>
          <select
            className="search-lauguage"
            value={languageId}
            onChange={handleLanguageIdChange}
          >
            <option value="1">日本語</option>
            <option value="2">英語</option>
          </select>
        </div>
        <div>
          <select className="sort" value={sortId} onChange={handleSortIdChange}>
            <option value="1">日付</option>
            <option value="2">役立Count</option>
            <option value="3">回答者数</option>
          </select>
        </div>
        <div>
          <select
            className="include_no_answer"
            value={includeNoAnswerId}
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
          router.push({
            pathname: '/new-question',
            query: {
              keyword,
            },
          });
        }}
      >
        質問
      </button>
    </div>
  );
};

export default SearchBar;
