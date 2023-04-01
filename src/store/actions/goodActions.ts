import { AppDispatch } from '../index';
import { IGood, ServerResponse } from '../../models/models';
import axios from '../../axios';
import { goodSlice } from '../slices/goodSlice';

export const fetchGoods = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(goodSlice.actions.fetching());
      const response = await axios.get<ServerResponse<IGood>>('goods.json');
      dispatch(goodSlice.actions.fetchSucsess(response.data.results));
    } catch (e) {
      dispatch(goodSlice.actions.fetchError(e as Error));
    }
  };
};
