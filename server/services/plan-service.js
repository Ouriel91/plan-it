const plansData = "./services/dummy-data.json"
const {Event} = require('../db/models')

async function getAllPlans() {
    let events = await Event.findAll()
    return events
}

const generateId = () => {
    let dt = new Date().getTime();
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
}


async function addPlan(plan){
    const eventId = generateId()
    const {headline, date, type, location} = plan
    await Event.create({eventId,headline, date, type, location})
    return plan
}

async function deletePlan(id){
    const removedPlan = await Event.findOne({where:{id}})
    await removedPlan.destroy()
    return removedPlan
}

async function editPlan(id, plan){
    const editedPlan = await Event.findOne({where:{id}})
    await editedPlan.update({...plan})
    return editedPlan
}

module.exports = {
    getAllPlans,
    addPlan,
    deletePlan,
    editPlan,
}