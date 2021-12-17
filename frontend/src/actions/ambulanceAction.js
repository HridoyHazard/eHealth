import axios from "axios";
import {
  AMBU_LIST_REQUEST,
  AMBU_LIST_SUCCESS,
  AMBU_LIST_FAIL,
  AMBU_DETAILS_REQUEST,
  AMBU_DETAILS_SUCCESS,
  AMBU_DETAILS_FAIL,
} from "../constants/ambulanceConstants.js";

export const listAmbulances = () => async (dispatch) => {
  try {
    dispatch({ type: AMBU_LIST_REQUEST });

    const { data } = await axios.get("/api/ambulances");

    dispatch({
      type: AMBU_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AMBU_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.message
          : error.message,
    });
  }
};

export const listAmbulanceDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: AMBU_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/ambulances/${id}`);

    dispatch({
      type: AMBU_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AMBU_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.message
          : error.message,
    });
  }
};
