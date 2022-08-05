import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import  EventPage from "./EventPage";
import { fetchPlansWithItemsAction } from "../../redux/actions/plansActions"


const mapStateToProps = (state, ownProps) => {
const events = state.plansReducer.plans;
  
  return {events};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    
    fetchPlansWithItemsAction
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
