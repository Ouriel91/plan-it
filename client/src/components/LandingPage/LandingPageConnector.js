import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LandingPage from "./LandingPage";
import{getPlans} from "../../../../redux/selectors/getPlans";

const mapStateToProps = (state, ownProps) => {   
    const plans = getPlans(state)
    return {plans};
};
  
const mapDispatchToProps = (dispatch, ownProps) => {
return bindActionCreators(
  {
    
  },
  dispatch
);
}  
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
