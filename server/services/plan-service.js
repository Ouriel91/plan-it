const { Event } = require("../db/models");
const { Item } = require("../db/models");
const { User } = require("../db/models");

async function fetchPlans() {
  const events = await Event.findAll({ raw: true });
  const items = await Item.findAll({ raw: true });
  const users = await User.findAll({ raw: true });
  const plans = [];
  events.forEach((event) => {
    const plan = { ...event };
    plan.eventItems = items.filter(
      (item) => parseInt(item.eventId) === event.id
    );
    plan.eventUsers = users.filter((user) => user.eventId === event.id);
    plans.push(plan);
  });

  return plans;
}

async function getAllPlans() {
  let events = await Event.findAll();
  return events;
}

async function addPlan(plan) {
  const { headline, date, type, location } = plan;

  await Event.create({ headline, date, type, location });
  const event = await Event.findAll({
    limit: 1,
    order: [["id", "DESC"]],
    raw: true,
  });
  event[0].eventUsers = [];
  const eventId = event[0].id.toString();

  const itemsByType = await insertItemsBytype(event[0].type, eventId);
  event[0].eventItems = [...itemsByType];

  const userAdmin = [
    {
      eventId: event[0].id,
      fullName: "You",
      email: "admin@gmail.com",
      isAdmin: true,
    },
  ];
  await User.bulkCreate(userAdmin);
  const user = await User.findAll({
    limit: 1,
    order: [["id", "DESC"]],
    raw: true,
  });
  event[0].eventUsers.push(user[0]);

  return event[0];
}

const insertBBQdefaultItems = async (eventId) => {
  const items = [];
  items.push({
    itemName: "Snacks",
    bringName: "",
    quantity: 1,
    status: false,
    eventId: eventId,
  });
  items.push({
    itemName: "Ice",
    bringName: "",
    quantity: 1,
    status: false,
    eventId: eventId,
  });
  items.push({
    itemName: "Tongs",
    bringName: "",
    quantity: 1,
    status: false,
    eventId: eventId,
  }),
    items.push({
      itemName: "BBQ",
      bringName: "",
      quantity: 1,
      status: false,
      eventId: eventId,
    });
  await Item.bulkCreate(items);
  return await Item.findAll({
    limit: 4,
    order: [["id", "DESC"]],
    raw: true,
  });
};

const insertPoolPartydefaultItems = async (eventId) => {
  const items = [];
  items.push({
    itemName: "Towels",
    bringName: "",
    quantity: 1,
    status: false,
    eventId: eventId,
  });
  items.push({
    itemName: "Ice",
    bringName: "",
    quantity: 1,
    status: false,
    eventId: eventId,
  });
  items.push({
    itemName: "Sunscreen",
    bringName: "",
    quantity: 1,
    status: false,
    eventId: eventId,
  }),
    items.push({
      itemName: "Sancks",
      bringName: "",
      quantity: 1,
      status: false,
      eventId: eventId,
    });
  await Item.bulkCreate(items);
  return await Item.findAll({
    limit: 4,
    order: [["id", "DESC"]],
    raw: true,
  });
};

const insertItemsBytype = async (type, eventId) => {
  if (type === "BBQ with friends") return insertBBQdefaultItems(eventId);
  else if (type === "Pool party") return insertPoolPartydefaultItems(eventId);
  else return [];
};

async function deletePlan(id) {
  const removedPlan = await Event.findOne({ where: { id } });
  await removedPlan.destroy();
  return removedPlan;
}

async function editPlan(id, plan) {
  const editedPlan = await Event.findOne({ where: { id } });
  await editedPlan.update({ ...plan });
  return editedPlan;
}

const getEventPageById = async (id) => {
  const event = await Event.findOne({ where: { id } });
  return event;
};

const itemAdding = async (newItem) => {
  newItem.status = false;
  newItem.quantity = 0
  const { itemName, quantity, status, eventId } = newItem;
  await Item.create({ itemName, quantity, status, eventId });
  const item = await Item.findAll({
    limit: 1,
    order: [["id", "DESC"]],
    raw: true,
  });
  return item;
};

const itemEdittig = async (item) => {
  try {
    const idx = parseInt(item.id);
    const editItem = await Item.update(
      {
        itemName: item.itemName,
        quantity: item.quantity,
        bringName: item.bringName,
        status: item.status,
      },
      { where: { id: idx }, returning: true, raw: true }
    );

    return editItem[1];
  } catch (err) {
    throw new Error(err);
  }
};

const itemDeleting = async (id) => {
  try {
    await Item.destroy({ where: { id: id } });
  } catch (err) {
    throw `There is no item with id: ${id} `;
  }
};

const userAdding = async (newUser) => {
  const { eventId, fullName, email } = newUser.user;
  const isAdmin = false;
  await User.create({ eventId, fullName, email, eventId, isAdmin });
  const user = await User.findAll({
    limit: 1,
    order: [["id", "DESC"]],
    raw: true,
  });
  return user;
};

const userDeleting = async (userId) => {
  try {
    await User.destroy({ where: { id: userId } });
  } catch (err) {
    throw `There is no item with id: ${userId} `;
  }
};

module.exports = {
  getAllPlans,
  addPlan,
  deletePlan,
  editPlan,
  getEventPageById,
  itemAdding,
  itemEdittig,
  itemDeleting,
  fetchPlans,
  userAdding,
  userDeleting,
};
