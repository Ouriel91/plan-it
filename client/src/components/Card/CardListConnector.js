import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CardList from "./CardList";
import {fetchEventAction} from "../../redux/actions/plansActions";
import {getPlans} from "../../redux/selectors/eventsSelector"

const mapStateToProps = (state, ownProps) => {  
    const plans = getPlans(state) 
    return {plans};
};
  
const mapDispatchToProps = (dispatch, ownProps) => {
return bindActionCreators(
  {
    fetchEventAction
  },
  dispatch
);
}  
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
