import {Meds_List_Fail, Meds_List_Request, Meds_List_Success } from '../constants/medsConstants.js';

export const medsListReducer = (state = { meds: [] }, action) => {
  switch (action.type) {
    case Meds_List_Request:
      return { loading: true, meds: [] };
    case Meds_List_Success:
      return { loading: false, products: action.payload };
    case Meds_List_Fail:
      return { loading: false, error: action.payload };
    default:
        return state
  }
};
