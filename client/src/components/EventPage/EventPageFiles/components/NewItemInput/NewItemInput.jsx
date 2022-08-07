import { useState } from "react";
import "monday-ui-react-core/dist/main.css";
import "./NewItemInput.css"

const NewItemInput = ({ event, addItemAction }) => {
  const [state, setState] = useState({
    itemName: "",
  });

  const handleInputValue = (e) => {
    const value = e.target.value;
    
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handlePressClick = async () => {
    if(state.itemName === ""){
      alert("Please fill in all fields")
      return
    }
    try {
      await addItemAction(state, event.id);
      setState({
        itemName: "",
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
          placeholder="Add an item to the table"
          value={state.itemName}
          name="itemName"
          onChange={handleInputValue}
        />
        <button
          id="add-button"
          type="submit"
          onClick={handlePressClick}
          className="input-button">
          +
        </button>
      </div>
    </div>
  );
};

export default NewItemInput;
