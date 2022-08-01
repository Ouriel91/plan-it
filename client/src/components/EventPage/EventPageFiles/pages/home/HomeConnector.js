import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Home from "./Home";



const mapStateToProps = (state, ownProps) => {
    debugger
  const event = state.plansReducer.plans[state.plansReducer.plans.length - 1];
  return { event };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
