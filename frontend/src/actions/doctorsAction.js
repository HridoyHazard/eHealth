import axios from "axios";
import {
  DOCTOR_LIST_REQUEST,
  DOCTOR_LIST_SUCCESS,
  DOCTOR_LIST_FAIL,
  DOCTOR_DETAILS_REQUEST,
  DOCTOR_DETAILS_SUCCESS,
  DOCTOR_DETAILS_FAIL,
} from "../constants/doctorsConstants.js";

export const listDoctors = () => async (dispatch) => {
  try {
    dispatch({ type: DOCTOR_LIST_REQUEST });

    const { data } = await axios.get("/api/doctors");

    dispatch({
      type: DOCTOR_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOCTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.message
          : error.message,
    });
  }
};

export const listDoctorDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DOCTOR_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/doctors/${id}`);

    dispatch({
      type: DOCTOR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOCTOR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.message
          : error.message,
    });
  }
};
