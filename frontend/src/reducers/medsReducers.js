import {
  MED_LIST_REQUEST,
  MED_LIST_SUCCESS,
  MED_LIST_FAIL,
  MED_DETAILS_REQUEST,
  MED_DETAILS_SUCCESS,
  MED_DETAILS_FAIL,
} from "../constants/medsConstants.js";

export const medsListReducer = (state = { meds: [] }, action) => {
  switch (action.type) {
    case MED_LIST_REQUEST:
      return { loading: true, meds: [] };
    case MED_LIST_SUCCESS:
      return { loading: false, meds: action.payload };
    case MED_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const medsDetailsReducer = (state = { med: {} }, action) => {
  switch (action.type) {
    case MED_DETAILS_REQUEST:
      return { loading: true, ...state };
    case MED_DETAILS_SUCCESS:
      return { loading: false, med: action.payload };
    case MED_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
