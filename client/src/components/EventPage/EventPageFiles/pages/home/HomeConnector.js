import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Home from "./Home";
import { fetchPlansWithItemsAction } from "../../../../../redux/actions/plansActions"


const mapStateToProps = (state, ownProps) => {
  // const event = state.plansReducer.plans[state.plansReducer.plans.length - 1];
  const eventId = parseInt(ownProps.paramId)
  console.log('eventId home connector', eventId);  
  const event = state.plansReducer.plans.find(plan => plan.id === eventId);
  console.log(event,'event home connect')

  return { event };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({fetchPlansWithItemsAction

  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
