import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

export const fetchPlans = async () => {
  let data;
  await axios.get(url).then((res) => {
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
    url,
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
    url: `${url}/${id}`,
  });

  return removedItem;
};

export const editPlan = async (id, plan) => {
  const editeddItem = await axios({
    method: "put",
    url: `${url}/${id}`,
    headers: { "Content-Type": "application/json" },
    data: {
      plan,
    },
  });

  return editeddItem;
};

export const getEventPageById = async (url) => {
  const response = await axios({
    method: "get",
    url,
  });

  return response.data;
};

export const postItem = async (item, eventId) => {
  const postedItem = {
    itemName: item.itemName,
    bringName: item.whoBrings,
    quantity: item.quantity,
    status: item.status,
    eventId: eventId,
  };
  const response = await axios({
    method: "post",
    url: `${url}/event-page/${eventId}/items`,
    headers: { "Content-Type": "application/json" },
    data: {
      postedItem,
    },
  });
  return response.data;
};
