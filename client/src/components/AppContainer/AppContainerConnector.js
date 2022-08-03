import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import  AppContainer from "./AppContainer";
import { fetchPlansWithItemsAction } from "../../redux/actions/plansActions"


const mapStateToProps = (state, ownProps) => {
 
  return {  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    fetchPlansWithItemsAction
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
