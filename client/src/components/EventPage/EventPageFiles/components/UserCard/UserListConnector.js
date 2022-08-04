import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import{addUserAction}  from "../../../../../redux/actions/plansActions"
import UserList from "./UserList";



const mapStateToProps = (state, ownProps) => {


  return { };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    
  return bindActionCreators({addUserAction
}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
