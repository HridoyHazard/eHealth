import axios from "axios";
import {
  APPOINMENT_CREATE_REQUEST,
  APPOINMENT_CREATE_FAIL,
  APPOINMENT_CREATE_SUCCESS,
} from "../constants/appoinmentConstants.js";

export const createAppoinment = (appoinment) => async (dispatch, getState) => {
  try {
    dispatch({
      type: APPOINMENT_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/appoinment`, appoinment, config);

    dispatch({
      type: APPOINMENT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: APPOINMENT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
