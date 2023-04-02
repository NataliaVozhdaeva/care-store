import { AppDispatch } from '../index';
import { IGood, ServerResponse } from '../../models/models';
import axios from '../../axios';
import { goodSlice } from '../slices/goodSlice';

export const fetchGoods = (page: number = 1, count: number = 6) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(goodSlice.actions.fetching());
      const response = await axios.get<ServerResponse<IGood>>('goods.json', {
        params: { page, count },
      });
      dispatch(goodSlice.actions.fetchSucsess(response.data.results));
    } catch (e) {
      dispatch(goodSlice.actions.fetchError(e as Error));
    }
  };
};
