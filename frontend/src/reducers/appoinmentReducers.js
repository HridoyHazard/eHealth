import {
  APPOINMENT_CREATE_REQUEST,
  APPOINMENT_CREATE_SUCCESS,
  APPOINMENT_CREATE_FAIL,
} from "../constants/appoinmentConstants.js";

export const appoinmentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case APPOINMENT_CREATE_REQUEST:
      return {
        loading: true,
      };
    case APPOINMENT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case APPOINMENT_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
