import * as actionTypes from "../action/actionTypes";
import INITIAL_STATE from "./initialState";

const textReducer = (state = INITIAL_STATE.text, action) => {
  switch (action.type) {
    case actionTypes.TEXT_TO_STATE:
      return action.payload;
    case actionTypes.ADD:
      return "";
    default:
      return state;
  }
};

export default textReducer;
