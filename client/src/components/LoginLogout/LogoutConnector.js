import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import  Logout from "./Logout";
import { logoutAction } from "../../redux/actions/plansActions"

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    
    logoutAction
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
