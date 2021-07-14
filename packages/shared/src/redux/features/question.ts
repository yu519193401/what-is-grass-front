import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetIndicesRequest } from '../../types/indexType';

const initialState: {
  latestSearchRequest: GetIndicesRequest | null;
} = {
  latestSearchRequest: null,
};

const questionSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    searchTriggered: (state, action: PayloadAction<GetIndicesRequest>) => {
      state.latestSearchRequest = {
        ...action.payload,
      };
    },
  },
});

export const { searchTriggered } = questionSlice.actions;
export const questionReducer = questionSlice.reducer;
