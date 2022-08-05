import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ItemRow from "./ItemRow";
import {
  saveItemAction,
  deleteItemAction,
} from "../../../../../../redux/actions/plansActions";

const mapStateToProps = (state, ownProps) => {
  const eventId = parseInt(ownProps.item.eventId);
  const users = state.plansReducer.plans.find(
    (plan) => plan.id === eventId
  ).eventUsers;
  return { users };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      saveItemAction,
      deleteItemAction,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemRow);
