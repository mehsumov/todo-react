import * as actionTypes from "../action/actionTypes";
import INITIAL_STATE from "./initialState";

const listReducer = (state = INITIAL_STATE.list, action) => {
  switch (action.type) {
    case actionTypes.CHECKED:
      let newState = state.map((item) => {
        if (item.id === action.payload) {
          item.done = !item.done;
          return item;
        }
        return item;
      });

      return newState;
    case actionTypes.ADD:
      const checked = state.find(
        (item) =>
          item.title.toLocaleLowerCase() === action.payload.toLocaleLowerCase()
      );

      if (checked) {
        alert("You already wrote this");
        return [...state];
      } else if (action.payload === "") {
        alert("Write something");
        return [...state];
      } else {
        return [
          ...state,
          { id: state.length + 1, title: action.payload, done: false },
        ];
      }
    case actionTypes.CLEAR_COMPLETED_WORKS:
      return state.filter(item=>item.done!==true)
      case actionTypes.CLEAR_ALL:
        return []
    default:
      return state;
  }
};

export default listReducer;
