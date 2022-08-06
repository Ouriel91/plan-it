import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteUserAction } from "../../../../../../redux/actions/plansActions";
import User from "./User";

const mapStateToProps = (state, ownProps) => {
return {  };
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ deleteUserAction }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
