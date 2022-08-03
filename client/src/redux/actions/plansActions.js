import {postPlan, fetchPlans,deletePlan,postItem,itemToEdit,deleteItem} from "../../api/plan";
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
   const plan = await postPlan(newEvent)
    dispatch(addPlan(plan));
    return plan
  };
};

export const removePlan = (id) => ({
  type: actionTypes.DELETE_PLAN,
  payload: id,
})

export const deleteEventAction = (id) => {
  return async (dispatch) => {
    const plan = await deletePlan(id)
     dispatch(removePlan(id));
     return plan
  }
}


export const saveItem = (newItem,eventId) => ({
  type: actionTypes.SAVE_ITEM,
  eventId,
  payload: newItem,
});

export const saveItemAction = (editItem,itemId,eventId) => {
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
  return async (dispatch) => {
   const item =  await postItem(newItem,eventId)
    dispatch(addItem(item));
    return item
  };
};


const itemToDelete = (itemId,eventId) => ({
  type: actionTypes.DELETE_ITEM,
  eventId,
  payload: itemId,
});

export const deleteItemAction = (itemId,eventId) => {
  return async (dispatch) => {
    await deleteItem(itemId,eventId);
    dispatch(itemToDelete(itemId,eventId));
  };
};





