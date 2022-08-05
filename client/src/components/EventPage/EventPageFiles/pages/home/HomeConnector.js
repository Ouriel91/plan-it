import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Home from "./Home";
import { fetchPlansWithItemsAction } from "../../../../../redux/actions/plansActions"


const mapStateToProps = (state, ownProps) => {
 
  const eventId = parseInt(ownProps.paramId)
   
  const event = state.plansReducer.plans.find(plan => plan.id === eventId);
 

  return { event };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({fetchPlansWithItemsAction

  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
