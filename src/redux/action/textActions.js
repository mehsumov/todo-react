import * as actionTypes from "./actionTypes";

export const textToState = (text) => {
  return {
    type: actionTypes.TEXT_TO_STATE,
    payload: text,
  };
};