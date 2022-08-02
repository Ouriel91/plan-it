import actionTypes from "../actions/constants.js"

const initialState = {
    plans : []
}


const plansReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_PLANS: 
            return {
                ...state,
                plans: [...action.payload],
            }
        case actionTypes.ADD_PLAN:
            return {
                ...state,
                plans: [...state.plans, ...action.payload],
              };
        case actionTypes.DELETE_PLAN: 
            return {
                ...state,
                plans: state.plans.filter(plan => plan.id !== action.payload)
            }
        default:
            return {
                ...state
            }
    }

};

export default plansReducer;