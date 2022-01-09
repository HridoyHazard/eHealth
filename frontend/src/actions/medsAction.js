import axios from "axios";
import {
  MED_LIST_REQUEST,
  MED_LIST_SUCCESS,
  MED_LIST_FAIL,
  MED_DETAILS_REQUEST,
  MED_DETAILS_SUCCESS,
  MED_DETAILS_FAIL,
  MED_DELETE_FAIL,
  MED_DELETE_SUCCESS,
  MED_DELETE_REQUEST,
  MED_CREATE_REQUEST,
  MED_CREATE_SUCCESS,
  MED_CREATE_FAIL,
  MED_UPDATE_REQUEST,
  MED_UPDATE_SUCCESS,
  MED_UPDATE_FAIL,
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
export const deleteMed = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MED_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/meds/${id}`, config);

    dispatch({
      type: MED_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: MED_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createMed = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MED_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/meds`, {}, config);

    dispatch({
      type: MED_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MED_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateMed = (med) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MED_UPDATE_REQUEST,
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

    const { data } = await axios.put(`/api/meds/${med._id}`, med, config);

    dispatch({
      type: MED_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MED_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
