import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CardList from "./CardList";
import {fetchPlansWithItemsAction, deleteEventAction} from "../../redux/actions/plansActions";
import {getPlans, getUser} from "../../redux/selectors/eventsSelector"

const mapStateToProps = (state, ownProps) => {  
    const plans = getPlans(state) 
    const user = getUser(state)
    return {plans, user};
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
