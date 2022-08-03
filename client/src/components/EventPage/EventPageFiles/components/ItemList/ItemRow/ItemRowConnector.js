import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ItemRow from "./ItemRow";
import{saveItemAction,deleteItemAction}  from "../../../../../../redux/actions/plansActions"


const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.eventId;
  return {eventId} 
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    saveItemAction,deleteItemAction
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemRow);
