import { handleActions } from "redux-actions";
import { HIDE_TOAST, SHOW_TOAST } from "redux/constants";

const initialState = {
  message: "",
  show: false,
  intent: "error",
  timeout: 2000
};

export default handleActions(
  {
    [HIDE_TOAST]: state => ({
      ...state,
      show: false,
      message: ""
    }),

    [SHOW_TOAST]: (state, { payload } = { timeout: 2000 }) => ({
      ...state,
      ...payload,
      show: true
    })
  },
  initialState
);
