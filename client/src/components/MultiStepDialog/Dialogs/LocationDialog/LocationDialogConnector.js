import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LocationDialog from "./LocationDialog";
import{addEventAction} from "../../../../redux/actions/plansActions";

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
export default connect(mapStateToProps, mapDispatchToProps)(LocationDialog);