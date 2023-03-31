import { AppDispatch } from '../index';
import { IGood, ServerResponse } from '../../models/models';
import axios from '../../axios';

export const fetchGoods = () => {
  return async (dispatch: AppDispatch) => {
    try {
      //const response = await GOODS;
      //console.log('fetching');
      /*  const depdata = fetch('goods.json').then((data) => {
        return data;
      });

      depdata.then(function (data) {
        console.log(data);
      }); */
      //<ServerResponse<IGood>>
      const response = await axios.get<ServerResponse<IGood>>('goods.json');
      /*       const response = () => {
        fetch('goods.json')
          .then((res) => res.json())
          .then((data) => {
            console.log(data.results);
          });
      }; */
      //console.log(response);

      console.log(response.data);
    } catch (e) {}
  };
};
