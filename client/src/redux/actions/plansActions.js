import {postPlan ,postItem,itemToEdit,deleteItem,fetchPlansWithItems,deletePlan,postUser} from "../../api/plan";
import actionTypes from "./constants";

export const logout = (user) => ({
  type: actionTypes.LOGOUT,
  payload: user
})

export const logoutAction = (user) => {
  return async (dispatch) => {
    dispatch(logout(user));
  }
}

export const login = (user) => ({
  type: actionTypes.LOGIN,
  payload: user
})

export const loginAction = (user) => {
  return async (dispatch) => {
    dispatch(login(user));
  }
}

export const addPlan = (newEvent) => ({
  type: actionTypes.ADD_PLAN,
  payload: [newEvent],
});

export const addEventAction = (newEvent) => {
  return async (dispatch) => {
   const plan = await postPlan(newEvent)
   console.log(plan,'plan')
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
   console.log('action',item)
    dispatch(addItem(item,eventId));
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


export const addPlansWithItemsToState = (fetchedPlans) => ({
  type: actionTypes.FETCH_ALL_PLANS_AND_ITEMS_USERS,
  payload: fetchedPlans
})

export const fetchPlansWithItemsAction = () => {
  console.log('fetching plans with items action')
  return async (dispatch) => {
    console.log('action')
    const fetchedPlans = await fetchPlansWithItems()
    console.log('fetched plans',fetchedPlans)
    dispatch(addPlansWithItemsToState(fetchedPlans));
  };
}


const addUser = (user) => ({
  type: actionTypes.ADD_USER,
  payload: user,
});
  export const addUserAction = (fullName,email,eventId) => {
    return async (dispatch) => {
      const user = await postUser(fullName,email,eventId)
      dispatch(addUser(user));
      return user
    }
  }






