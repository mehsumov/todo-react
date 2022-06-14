import { combineReducers } from "redux";
import listReducer from "./listReducer";
import textReducer from "./textReducer";

const reducers = combineReducers({
  listReducer,
  textReducer,
});
export default reducers