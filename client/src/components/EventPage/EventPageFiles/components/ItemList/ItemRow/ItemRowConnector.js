import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ItemRow from "./ItemRow";
import{saveItemAction}  from "../../../../../../redux/actions/plansActions"


const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.eventId;
  return {eventId} 
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    saveItemAction
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemRow);
