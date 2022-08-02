import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import{addItemAction}  from "../../../../../redux/actions/plansActions"
import NewItemInput from "./NewItemInput";



const mapStateToProps = (state, ownProps) => {
console.log('events:',state)
 
  return { };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    
  return bindActionCreators({addItemAction
}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(NewItemInput);
