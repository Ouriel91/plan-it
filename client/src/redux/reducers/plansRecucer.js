import actionTypes from "../actions/constants.js"

const initialState = {
    plans : [],
    counterWizard : 0,
}

const plansReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_PLANS: 
            const newArr = [...action.payload];
            return {
                ...state,
                plans: newArr,
            }
        case actionTypes.ADD_PLAN:
            const newArr1 = [...state.plans];
            newArr1.push(...action.payload)
            return {
                ...state,
                plans: newArr1
            }; 
        // case "CREATE_PLAN":
        //     return [...state, action.payload];
        // case "UPDATE_PLAN":
        //     return state.map(plan => plan._id === action.payload._id ? action.payload : plan);
        // case "DELETE_PLAN":
        //     return state.filter(plan => plan._id !== action.payload);
        default:
            return state;
    }

};

export default plansReducer;


