import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CardList from "./CardList";
import {fetchPlansWithItemsAction, deleteEventAction} from "../../redux/actions/plansActions";
import {getPlans} from "../../redux/selectors/eventsSelector"

const mapStateToProps = (state, ownProps) => {  
    const plans = getPlans(state) 
    return {plans};
};
  
const mapDispatchToProps = (dispatch, ownProps) => {
return bindActionCreators(
  {
    fetchPlansWithItemsAction,
    deleteEventAction
  },
  dispatch
);
}  
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
