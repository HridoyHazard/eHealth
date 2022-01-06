import {
  MED_LIST_REQUEST,
  MED_LIST_SUCCESS,
  MED_LIST_FAIL,
  MED_DETAILS_REQUEST,
  MED_DETAILS_SUCCESS,
  MED_DETAILS_FAIL,
  MED_DELETE_FAIL,
  MED_DELETE_REQUEST,
  MED_DELETE_SUCCESS,
  MED_CREATE_REQUEST,
  MED_CREATE_SUCCESS,
  MED_CREATE_FAIL,
  MED_CREATE_RESET,
  MED_UPDATE_REQUEST,
  MED_UPDATE_SUCCESS,
  MED_UPDATE_FAIL,
  MED_UPDATE_RESET,
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
export const medsDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MED_DELETE_REQUEST:
      return { loading: true };
    case MED_DELETE_SUCCESS:
      return { loading: false, success: true };
    case MED_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const medsCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MED_CREATE_REQUEST:
      return { loading: true };
    case MED_CREATE_SUCCESS:
      return { loading: false, success: true, med: action.payload };
    case MED_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case MED_CREATE_RESET:
      return {}
    default:
      return state;
  }
};

export const medsUpdateReducer = (state = { med: {} }, action) => {
  switch (action.type) {
    case MED_UPDATE_REQUEST:
      return { loading: true }
    case MED_UPDATE_SUCCESS:
      return { loading: false, success: true, med: action.payload }
    case MED_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case MED_UPDATE_RESET:
      return { med: {} }
    default:
      return state
  }
}