import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Index, NewIndexResponse, NewIndexRequest } from '../../types';

// mswが有効化される前にクエリーが飛んじゃう謎の挙動があったので
// デフォルトのfetchをPromiseでラップしてみたら期待通りに動いた。
// いまいちわからん。
const fetchFn: (
  input: RequestInfo,
  init?: RequestInit | undefined
) => Promise<Response> = async (input, init) => {
  return await fetch(input, init);
};

export const wordApi = createApi({
  reducerPath: 'wordApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    fetchFn: fetchFn,
  }),
  endpoints: (builder) => ({
    getIndices: builder.query<[Index], void>({
      query: () => 'question',
    }),
    addIndex: builder.mutation<NewIndexResponse, NewIndexRequest>({
      query: (body) => ({
        url: `question`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

// using TS 4.0
export const useGetIndicesQuery = wordApi.endpoints.getIndices.useQuery;
export const useAddIndexMutation = wordApi.endpoints.addIndex.useMutation;
