import actionTypes from "../actions/constants.js";

const initialState = {
  plans: [],
};

const plansReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_PLANS:
      return {
        ...state,
        plans: [...action.payload],
      };
    case actionTypes.ADD_PLAN:
      return {
        ...state,
        plans: [...state.plans, ...action.payload],
      };
    case actionTypes.ADD_ITEM:
        console.log('heere',action.payload)
      return {
        ...state,
        plans: state.plans.map((plan) =>
          plan.eventId === action.eventId
            ? { ...plan, eventItems: [...plan.eventItems, ...action.payload] }
            : plan
        ),
      };
    default:
      return state;
  }
};

export default plansReducer;
