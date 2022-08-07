import axios from "axios";



export const fetchPlans = async () => {
  let data;
  await axios.get('http://localhost:8083/plan').then((res) => {
    data = res.data;
  });

  return data;
};

export const postPlan = async (plan) => {
  const postedPlan = {
    headline: plan.eventName,
    date: plan.dates,
    type: plan.eventType,
    location: plan.location,
  };
  const response = await axios({
    method: "post",
    url: "http://localhost:8083/plan",
    headers: { "Content-Type": "application/json" },
    data: {
      postedPlan,
    },
  });
  return response.data;
};

export const deletePlan = async (id) => {
  const removedItem = await axios({
    method: "delete",
    url: `http://localhost:8083/plan/${id}`,
  });

  return removedItem;
};

export const editPlan = async (id, plan) => {
  const editeddItem = await axios({
    method: "put",
    url: `http://localhost:8083/plan/${id}`,
    headers: { "Content-Type": "application/json" },
    data: {
      plan,
    },
  });

  return editeddItem;
};



export const postItem = async (item, eventId) => {
  const postedItem = {
    itemName: item.itemName,
    quantity: item.quantity,
    eventId: eventId,
  };
  const response = await axios({
    method: "post",
    url: `http://localhost:8083/plan/event-page/${eventId}/items`,
    headers: { "Content-Type": "application/json" },
    data: {
      postedItem,
    },
  });
  return response.data;
};

export const itemToEdit = async (item, itemId, eventId) => {
  const editItem = {
    itemName: item.itemName,
    bringName: item.bringName,
    quantity: item.quantity,
    status: item.status,
    id: itemId,
  };
  const response = await axios({
    method: "put",
    url: `http://localhost:8083/plan/event-page/${eventId}/items`,
    headers: { "Content-Type": "application/json" },
    data: {
      editItem,
    },
  });
  return response.data;
};

export const deleteItem = async (itemId, eventId) => {
  const removedItem = await axios({
    method: "delete",
    url: `http://localhost:8083/plan/event-page/${eventId}/items`,
    data: { itemId },
  });

  return removedItem;
};
export const fetchPlansWithItems = async () => {

  const response = await axios({
    method: "get",
    url: `http://localhost:8083/plan/events`,
  });
  return response.data;
};

export const postUser = async (fullName, email, eventId) => {
  const user = {
    fullName,
    email,
    eventId,
  };

  const response = await axios({
    method: "post",
    url: `http://localhost:8083/plan/event-page/${eventId}/users`,
    headers: { "Content-Type": "application/json" },
    data: {
      user,
    },
  });
  return response.data;
};


export const userDeleting = async (userId,eventId) => {
  
  const response = await axios({
    method: "delete",
    url: `http://localhost:8083/plan/event-page/${eventId}/users`,
    headers: { "Content-Type": "application/json" },
    data: {
      userId,
    },
  });
  return response.data;
}
