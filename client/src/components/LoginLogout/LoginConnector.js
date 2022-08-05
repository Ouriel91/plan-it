import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import  Login from "./Login";
import { loginAction } from "../../redux/actions/plansActions"


const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    
    loginAction
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
