import plansReducer from "./plansRecucer";
import { combineReducers } from "redux";
import plansView from "./plansView";

const allReducers = combineReducers({
  plansReducer,
  plansView
});
  
export default allReducers;