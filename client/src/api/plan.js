import axios from "axios";

export const fetchPlans = async () => {
  let data;
  await axios.get('/plan').then((res) => {
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
    url: "/plan",
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
    url: `/plan/${id}`,
  });

  return removedItem;
};

export const editPlan = async (id, plan) => {
  const editeddItem = await axios({
    method: "put",
    url: `/plan/${id}`,
    headers: { "Content-Type": "application/json" },
    data: {
      plan,
    },
  });

  return editeddItem;
};
