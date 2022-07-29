import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL; 

export const fetchPlans = async () =>{ 
    let data
    await axios.get(url).then(res => {
        data = res.data
    })
    
    return data;
}

export const postPlan = async (plan) => {
    const postedPlan = {
        headline: plan.eventName,
        date: plan.dates,
        type: plan.eventType,
        location: plan.location
    }
    await axios({
        method: 'post',
        url,
        headers: {"Content-Type": "application/json"}, 
        data: {
            postedPlan
        }
    })
}

export const deletePlan = async(id) => {
    const removedItem = await axios({
        method: 'delete',
        url: `${url}/${id}`
    })

    return removedItem
}

export const editPlan = async(id, plan) => {
    const editeddItem = await axios({
        method: 'put',
        url: `${url}/${id}`,
        headers: {"Content-Type": "application/json"},
        data: {
            plan
        }
    })

    return editeddItem
}