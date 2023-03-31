import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createImmediatelyInvokedFunctionExpression } from 'typescript';
import { IGood } from '../../models/models';

interface GoodState {
  loading: boolean;
  error: string;
  goods: IGood[];
}

const initialState: GoodState = {
  loading: false,
  error: '',
  goods: [],
};

export const goodSlice = createSlice({
  name: 'good',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSucsess(state, action: PayloadAction<IGood[]>) {
      state.loading = false;
      state.goods = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default goodSlice.reducer;
