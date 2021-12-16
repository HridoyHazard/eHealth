import axios from "axios";
import {
  Meds_List_Fail,
  Meds_List_Success,
  Meds_List_Request,
} from "../constants/medsConstants.js";

export const listMeds = () => async (dispatch) => {
  try {
    dispatch({ type: Meds_List_Request });

    const { data } = await axios.get("/api/meds");

    dispatch({
      type: Meds_List_Success,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: Meds_List_Fail,
      payload:
        error.response && error.response.data.message
          ? error.response.message
          : error.message,
    });
  }
};
