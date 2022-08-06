import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import{addUserAction,deleteUserAction}  from "../../../../../redux/actions/plansActions"
import UserList from "./UserList";



const mapStateToProps = (state, ownProps) => {
const eventId = ownProps.eventId;
const users = state.plansReducer.plans.find((plan)=>plan.id ===eventId).eventUsers;
console.log(users,'avatar');
  return {users};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    
  return bindActionCreators({addUserAction,deleteUserAction
}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
