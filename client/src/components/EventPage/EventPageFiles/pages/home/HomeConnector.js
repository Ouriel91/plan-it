import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Home from "./Home";



const mapStateToProps = (state, ownProps) => {
  const getEvent = (id) => state.plansReducer.plans.find(p => p.id === +id)
  const event = state.plansReducer.plans[state.plansReducer.plans.length - 1];
  return { event, getEvent };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
