import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Index } from '../../types';

export const wordApi = createApi({
  reducerPath: 'wordApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getIndices: builder.query<[Index], void>({
      query: () => 'question',
    }),
  }),
});

// using TS 4.0
export const useGetIndicesQuery = wordApi.endpoints.getIndices.useQuery;
