const plansData = "./services/dummy-data.json"
const {Event} = require('../db/models')
const {Item} = require('../db/models')

async function getAllPlans() {
    let events = await Event.findAll()
    return events
}

async function addPlan(plan){
    const {headline, date, type, location} = plan
    await Event.create({headline, date, type, location})
    const events = await Event.findAll({ raw: true });
    const event = events[events.length-1]
    event.eventItems =  [];
    event.eventsUsers = [];
    return event
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

const getEventPageById = async (id) => {
    const event = await Event.findOne({where:{id}})
    return event
}

const itemAdding = async (item) => {
    console.log(item,'item!!!')
   const {itemId, itemName, bringName, quantity, status, eventId} = item
    await Item.create({itemId, itemName, bringName, quantity, status, eventId})
console.log(item,'server')
}

module.exports = {
    getAllPlans,
    addPlan,
    deletePlan,
    editPlan,
    getEventPageById,
    itemAdding
}