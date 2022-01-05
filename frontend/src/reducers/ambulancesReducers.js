import {
  AMBU_LIST_REQUEST,
  AMBU_LIST_SUCCESS,
  AMBU_LIST_FAIL,
  AMBU_DETAILS_REQUEST,
  AMBU_DETAILS_SUCCESS,
  AMBU_DETAILS_FAIL,
} from "../constants/ambulancesConstants.js";

export const ambulancesListReducer = (state = { ambulances: [] }, action) => {
  switch (action.type) {
    case AMBU_LIST_REQUEST:
      return { loading: true, ambulances: [] };
    case AMBU_LIST_SUCCESS:
      return { loading: false, ambulances: action.payload };
    case AMBU_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const ambulancesDetailsReducer = (
  state = { ambulances: {} },
  action
) => {
  switch (action.type) {
    case AMBU_DETAILS_REQUEST:
      return { loading: true, ...state };
    case AMBU_DETAILS_SUCCESS:
      return { loading: false, ambulances: action.payload };
    case AMBU_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
