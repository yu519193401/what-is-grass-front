import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  Index,
  NewIndexResponse,
  NewIndexRequest,
  GetIndicesRequest,
  GetIndicesResponse,
} from '../../types/indexType';
import {
  Answer,
  NewAnswerRequest,
  NewAnswerResponse,
  GetAnswersRequest,
  GetANswersResponse,
} from '../../types/answer';

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
    getIndices: builder.query<Index[], GetIndicesRequest>({
      query: (params) => ({
        url: 'question',
        params,
      }),
      transformResponse: (res: GetIndicesResponse) => res.indices,
    }),
    addIndex: builder.mutation<NewIndexResponse, NewIndexRequest>({
      query: (body) => ({
        url: `question`,
        method: 'POST',
        body,
      }),
    }),
    getAnswers: builder.query<Answer[], GetAnswersRequest>({
      query: (params) => ({
        url: 'answer',
        params,
      }),
      transformResponse: (res: GetANswersResponse) => res.answer,
    }),
    addAnswer: builder.mutation<NewAnswerResponse, NewAnswerRequest>({
      query: (body) => ({
        url: 'answer',
        method: 'POST',
        body,
      }),
    }),
  }),
});

// using TS 4.0
export const useGetIndicesQuery = wordApi.endpoints.getIndices.useQuery;
export const useLazyGetIndicesQuery = wordApi.endpoints.getIndices.useLazyQuery;
export const useAddIndexMutation = wordApi.endpoints.addIndex.useMutation;
export const useLazyGetAnswersQuery = wordApi.endpoints.getAnswers.useLazyQuery;
export const useGetAnswersQuery = wordApi.endpoints.getAnswers.useQuery;
export const useAddAnswerMutation = wordApi.endpoints.addAnswer.useMutation;
