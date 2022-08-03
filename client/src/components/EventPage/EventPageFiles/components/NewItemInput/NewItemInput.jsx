import { useState } from "react";
import { Button } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";
import "./NewItemInput.css"

const NewItemInput = ({ event, addItemAction }) => {
  const [state, setState] = useState({
    itemName: "",
    quantity: "",
    bringName: "",
    status: "",
  });

  const handleInputValue = (e) => {
    const value = e.target.value;
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
          type="text"
          placeholder="Quntity"
          name="quantity"
          value={state.quantity}
          onChange={handleInputValue}
        />
        <input
          className="input-table"
          id="taskInput"
          type="text"
          placeholder="Who brings"
          onChange={handleInputValue}
          value={state.bringName}
          name="bringName"
        />
        <input
          className="input-table"
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
          className="input-button"
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default NewItemInput;
