import { createSlice } from '@reduxjs/toolkit';

export type Index = {
  index_id: number;
  index: string;
  questioner: number;
  frequently_used_count: number;
  answer_count: number;
  best_answer: string;
  date: string;
};

const initialState: {
  indices: Index[];
} = {
  indices: [],
};

const questionSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    dummy: (state) => {
      state.indices.push({
        index_id: state.indices.length,
        index: 'はげ',
        questioner: 1,
        frequently_used_count: 0,
        answer_count: 1,
        best_answer: '髪がない',
        date: '2021-06-29T12:00:00.000+09:00',
      });
    },
  },
});

export const { dummy } = questionSlice.actions;
export const questionReducer = questionSlice.reducer;
