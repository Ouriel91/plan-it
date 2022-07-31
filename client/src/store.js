import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { fetchPlans } from "./api/plan";
import allReducers from "./redux/reducers/";
const myfunc = async () => {

}

export const store = configureStore({
  reducer: allReducers,
  middleware: [thunkMiddleware],
  preloadedState: {}
});
// (async (store) => {
//   await store.dispatch(fetchPlans());
// })(store);

