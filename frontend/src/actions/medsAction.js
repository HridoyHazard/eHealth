import axios from "axios";
import {
  MED_LIST_REQUEST,
  MED_LIST_SUCCESS,
  MED_LIST_FAIL,
  MED_DETAILS_REQUEST,
  MED_DETAILS_SUCCESS,
  MED_DETAILS_FAIL,
} from "../constants/medsConstants.js";

export const listMeds = () => async (dispatch) => {
  try {
    dispatch({ type: MED_LIST_REQUEST });

    const { data } = await axios.get("/api/meds");

    dispatch({
      type: MED_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MED_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.message
          : error.message,
    });
  }
};

export const listMedDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MED_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/meds/${id}`);

    dispatch({
      type: MED_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MED_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.message
          : error.message,
    });
  }
};
