import {postPlan, fetchPlans,postItem,itemToEdit} from "../../api/plan";
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


export const saveItem = (newItem,eventId) => ({
  type: actionTypes.SAVE_ITEM,
  eventId,
  payload: newItem,
});

export const saveItemAction = (editItem,itemId,eventId) => {
  console.log(editItem,itemId,eventId,'edit!! and event id')
  return async (dispatch) => {
   const item =  await itemToEdit(editItem,itemId,eventId)
    dispatch(saveItem(item,eventId));
  };
};

export const addItem = (newItem,eventId) => ({
  type: actionTypes.ADD_ITEM,
  eventId,
  payload: newItem,
});

export const addItemAction =  (newItem,eventId) => {

  console.log(newItem,eventId,'item and event id')
  return async (dispatch) => {
   const item =  await postItem(newItem,eventId)
   console.log(item,'item')
    dispatch(addItem(item));
    return item
  };
};





