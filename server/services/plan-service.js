const plansData = "./services/dummy-data.json"
const {Event} = require('../db/models')

async function getAllPlans() {
    let events = await Event.findAll()
    return events
}

async function addPlan(plan){
    const {headline, date, type, location} = plan
    await Event.create({headline, date, type, location})
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