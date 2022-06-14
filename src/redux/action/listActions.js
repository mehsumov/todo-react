import * as actionTypes from "./actionTypes";

export const checkedItem = (id) => {
  return {
    type: actionTypes.CHECKED,
    payload: id,
  };
};

export const addItem = (text) => {
  return {
    type: actionTypes.ADD,
    payload: text,
  };
};


export const clearCompletedItem =()=>{
  return {
    type:actionTypes.CLEAR_COMPLETED_WORKS
  }
}

export const clearAll=()=>{
  return {
    type:actionTypes.CLEAR_ALL
  }
}