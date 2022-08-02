const planService = require('../services/plan-service');

async function plansList(req, res){
    const plans = await planService.getAllPlans()
    return res.status(200).json(plans);
}

async function planAdding(req, res){

    const {postedPlan} = req.body; 

    if(!postedPlan){
        return res.status(400).json({error: "Invalid plan, todo is null"});
    }

    try{
        const plan = await planService.addPlan(postedPlan)
        return res.status(200).json(plan);
    }catch(err){
        return res.status(500).json({error: err.toString()})
    }
}

async function planDeleting(req, res) {
    const id = req.params.id

    try{
        const plans = await planService.deletePlan(id)
        return res.status(200).json(plans);
    }catch(err){
        return res.status(500).json({error: err.toString()})
    }
}

async function planEditing(req, res) {
    const id = req.params.id
    const {plan} = req.body;

    try{
        const plans = await planService.editPlan(id, plan)
        return res.status(200).json(plans);
    }catch(err){
        return res.status(500).json({error: err.toString()})
    }

}
const getEventPage = async (req, res) => {
    const id = parseInt(req.params.id)
    try{
        const event = await planService.getEventPageById(id)
        return res.status(200).json(event);
    }catch(err){
        return res.status(500).json({error: err.toString()})
    }
}

const itemAdding = async (req, res) => {
    const {postedItem} = req.body; 
    

    if(!postedItem){
        return res.status(400).json({error: "Invalid item, item is null"});
    }

    try{
        const item = await planService.itemAdding(postedItem)
        return res.status(200).json(item);
    }catch(err){
        return res.status(500).json({error: err.toString()})
    }
}

const itemEditing = async (req, res) => {
    const {editItem} = req.body; 
    

    if(!editItem){
        return res.status(400).json({error: "Invalid edit item,  item to edit is null"});
    }

    try{
        const item = await planService.itemEdittig(editItem)
        return res.status(200).json(item);
    }catch(err){
        return res.status(500).json({error: err.toString()})
    }
}


const itemDeleting = async (req, res) => {
    const {itemId} = req.body; 

    if(!itemId){
        return res.status(400).json({error: "Invalid itemid"});
    }

    try{
         await planService.itemDeleting(itemId)
        return res.status(200).json("deleted successfully");
    }catch(err){
        return res.status(500).json({error: err.toString()})
    }
}


module.exports = {
    plansList,
    planAdding,
    planDeleting,
    planEditing,
    getEventPage,
    itemAdding,
    itemEditing,
    itemDeleting,
}