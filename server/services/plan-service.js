const plansData = "./services/dummy-data.json"
const {Event} = require('../db/models')
//const {Item} = require('../db/models')




// async function getAllEventsState() {
//     const events = await getAllPlans();
//     events.forEach(event => {
//         event.evenItems = await Item.findAll({where:{eventId:event.eventId}})
//     })
//     return events;
    
// }

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
    //const eventId = generateId()
    const {headline, date, type, location} = plan
    await Event.create({headline, date, type, location})
    const events = await Event.findAll({ raw: true });
    const event = events[events.length-1]
    event.eventItems =  [];
    event.eventsUsers = [];
    console.log(event,'server')
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

module.exports = {
    getAllPlans,
    addPlan,
    deletePlan,
    editPlan,
    getEventPageById
}