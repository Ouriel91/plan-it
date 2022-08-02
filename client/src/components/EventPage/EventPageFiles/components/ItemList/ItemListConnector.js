import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ItemList from "./ItemList";
import{saveItemAction}  from "../../../../../redux/actions/plansActions"


const mapStateToProps = (state, ownProps) => {
   console.log(state,'see the state')
  return {  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    saveItemAction
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
