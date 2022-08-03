import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ItemList from "./ItemList";
import{saveItemAction}  from "../../../../../redux/actions/plansActions"


const mapStateToProps = (state, ownProps) => {
  console.log("ownProps", ownProps)
  const items = ownProps.event.eventItems ? ownProps.event.eventItems : []
/*    const items = state.plansReducer.plans[state.plansReducer.plans.length - 1].eventItems;
 */  return { items };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    saveItemAction
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
