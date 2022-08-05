import { useState } from "react";
import { Button } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";
import "./NewItemInput.css"

const NewItemInput = ({ event, addItemAction }) => {
  const [state, setState] = useState({
    itemName: "",
    quantity: "",
    bringName: "",
    status: "pending",
  });

  const handleInputValue = (e) => {
    const value = e.target.value;
    // if(e.target.value < "0"){
    //   alert("You can't insert negative quantity")
    //   return
    // }
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handlePressClick = async () => {
    try {
      await addItemAction(state, event.id);
      setState({
        itemName: "",
        quantity: "",
        bringName: "",
        status: "",
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div>
      <div className="list-controls-container">
        <input
          className="input-table"
          id="taskInput"
          type="text"
          placeholder="What to bring"
          value={state.itemName}
          name="itemName"
          onChange={handleInputValue}
        />
        <input
          className="input-table"
          id="taskInput"
          type="number"
          min="0"
          placeholder="Quantity"
          name="quantity"
          value={state.quantity}
          onChange={handleInputValue}
        />
        <button
          id="add-button"
          type="submit"
          onClick={handlePressClick}
          className="input-button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewItemInput;
