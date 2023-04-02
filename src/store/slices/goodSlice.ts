import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGood } from '../../models/models';

interface GoodState {
  loading: boolean;
  error: string;
  goods: IGood[];
  /* count: number; */
}

const initialState: GoodState = {
  loading: false,
  error: '',
  goods: [],
  /*  count: 0, */
};

/* interface GoodPayload {
  goods: IGood[];
  count: number;
}
 */
export const goodSlice = createSlice({
  name: 'good',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSucsess(state, action: PayloadAction</* GoodPayload */ IGood[]>) {
      state.error = '';
      state.loading = false;
      state.goods = action.payload;
      /* state.count = action.payload.count; */
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default goodSlice.reducer;
