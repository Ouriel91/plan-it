const { Event } = require("../db/models");
const { Item } = require("../db/models");

// async function getAllEventsState() {
//     const events = await getAllPlans();
//     events.forEach(event => {
//         event.evenItems = await Item.findAll({where:{eventId:event.eventId}})
//     })
//     return events;

// }

async function getAllPlans() {
  let events = await Event.findAll();
  return events;
}


async function addPlan(plan) {
  const { headline, date, type, location } = plan;
  await Event.create({ headline, date, type, location });
  const events = await Event.findAll({ raw: true });
  const event = events[events.length - 1];
  event.eventItems = [];
  event.eventsUsers = [];
  return event;
}

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
  const { itemName, bringName, quantity, status, eventId } = newItem;
  await Item.create({ itemName, bringName, quantity, status, eventId });
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
  try{
  await Item.destroy({ where: { id: id } });
  
} catch (err) {
  throw `There is no item with id: ${id} `;
}

}
module.exports = {
  getAllPlans,
  addPlan,
  deletePlan,
  editPlan,
  getEventPageById,
  itemAdding,
  itemEdittig,
  itemDeleting,
};
