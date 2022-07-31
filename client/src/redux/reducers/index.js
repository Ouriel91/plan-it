import plansReducer from "./plansReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  plansReducer,
});
export default allReducers;