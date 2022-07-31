import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Home from "./Home"
//import{addEventAction} from "../../../../redux/actions/plansActions";

const mapStateToProps = (state, ownProps) => {   
    const event = state.plansReducer.plans[0]
    console.log("connector",event)
    return {event};
};
  
const mapDispatchToProps = (dispatch, ownProps) => {
return bindActionCreators(
  {
    
  },
  dispatch
);
}  
export default connect(mapStateToProps, mapDispatchToProps)(Home);