import { useState } from "react";
//import "./ListControls.css";
import { Button } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";
import EventNameDialog from "../../../../MultiStepDialog/Dialogs/EventNameDialog/EventNameDialog";

const NewItemInput = ({event,addItemAction}) => {
  const [state, setState] = useState({
    itemName: "",
    quantity: "",
    whoBrings: "",
    status: "",
  });

  const handleInputValue = (e) => {
    console.log("e", e.target.value);
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handlePressClick = async () => {
    try {
      //   showLoaderAction();
      console.log("state", state);
      console.log(event)
       await addItemAction(state,event.id);
      // hideLoaderAction();

      setState({
        itemName: "",
        quantity: "",
        whoBrings: "",
        status: "",
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div>
      <div className="list-controls">
        <input
          id="taskInput"
          type="text"
          placeholder="Add your new item"
          value={state.itemName}
          name="itemName"
          onChange={handleInputValue}
        />
        <input
          id="taskInput"
          type="text"
          placeholder="Quntity"
          name="quantity"
          value={state.quantity}
          onChange={handleInputValue}
        />
        <input
          id="taskInput"
          type="text"
          placeholder="Who brings"
          onChange={handleInputValue}
          value={state.whoBrings}
          name="whoBrings"
        />
        <input
          id="taskInput"
          type="text"
          placeholder="status"
          onChange={handleInputValue}
          value={state.status}
          name="status"
        />
        <Button
          id="add-button"
          type="submit"
          onClick={handlePressClick}
          //   loading={showLoader}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default NewItemInput;
