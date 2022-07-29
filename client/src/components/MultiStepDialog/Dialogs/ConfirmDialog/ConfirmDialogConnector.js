import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ConfirmDialog from "./ConfirmDialog";
import{addEventAction} from "../../../../actions/plansActions";

const mapStateToProps = (state, ownProps) => {   
    return {};
};
  
const mapDispatchToProps = (dispatch, ownProps) => {
return bindActionCreators(
  {
    addEventAction
  },
  dispatch
);
}  
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDialog);
