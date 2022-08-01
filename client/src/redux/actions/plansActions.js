import {postPlan, fetchPlans,postItem} from "../../api/plan";
import actionTypes from "./constants";

export const fetchAllPlans = (fetchedEvents) => ({
  type: actionTypes.FETCH_ALL_PLANS,
  payload: fetchedEvents
})

export const fetchEventAction = () => {
  return async (dispatch) => {
    const fetchedEvents = await fetchPlans()
    dispatch(fetchAllPlans(fetchedEvents));
  };
}

export const addPlan = (newEvent) => ({
  type: actionTypes.ADD_PLAN,
  payload: [newEvent],
});

export const addEventAction = (newEvent) => {
  return async (dispatch) => {
   const plan =  await postPlan(newEvent)
    dispatch(addPlan(plan));
    return plan
  };
};


export const saveItem = (newItem) => ({
  type: actionTypes.SAVE_ITEM,
  payload: [newItem],
});

export const saveItemAction = (newItem,eventId) => {
  return async (dispatch) => {
    console.log(newItem,'newItem')
   const item =  await postItem(newItem,eventId)
    dispatch(saveItem(item));
    return item
  };
};


