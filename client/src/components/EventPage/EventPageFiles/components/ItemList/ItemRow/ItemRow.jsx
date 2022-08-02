import {  TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

const ItemRow = ({ item, saveItemAction,eventId }) => {;

  console.log("item", item);
  // Initial states
  const [editItem, setEditItem] = useState({
    itemName: "",
    quantity: "",
    whoBrings: "",
    status: "",
  });
  const [isEditClicked, setEditClicked] = useState(true);

  const handleEditButtonClick = () => {
    console.log("edit button clicked");
    setEditClicked(false);
  };

  // Function to handle save
  const handleSaveButtonClick = async  () => {
    try {
      setEditClicked(true);
         await saveItemAction(editItem, item.id,eventId);
    } catch (err) {
      throw new Error(err);
    }
  };


  const handleInputChange = (e) => {
    const value = e.target.value;
    setEditItem({
      ...editItem,
      [e.target.name]: value,
    });
    console.log("editItem", editItem);
  };

  const handleDeleteClick = (i) => {
    // const list = [...rows];
    // list.splice(i, 1);
    // setRows(list);
    // setShowConfirm(false);
  };

  return (
    <TableRow id={item.id}>
      <div>
        <TableCell>
          <input
            style={{ border: "1px solid green", width: "100px" }}
            value={item.itemName}
            readOnly={isEditClicked}
            onChange={handleInputChange}
            name="itemName"
          />
        </TableCell>
        <TableCell>
          <input
            style={{ border: "1px solid green", width: "100px" }}
            value={item.bringName}
            name="bringName"
            readOnly={isEditClicked}
            onChange={handleInputChange}
          />
        </TableCell>
        <TableCell>
          <input
            style={{ border: "1px solid green", width: "100px" }}
            value={item.quantity}
            name="quantity"
            readOnly={isEditClicked}
            onChange={handleInputChange}
          />
        </TableCell>
        <TableCell>
          <input
            style={{ border: "1px solid green", width: "100px" }}
            value={item.status}
            name="status"
            readOnly={isEditClicked}
            onChange={handleInputChange}
          />
        </TableCell>
      </div>

      {/* <div>
						<TableCell component="th" scope="row">
						{item.itemName}
						</TableCell>
						<TableCell component="th" scope="row">
						{item.bringName}
						</TableCell>
						<TableCell component="th" scope="row" align="center">
						{item.quantity}
						</TableCell>
						<TableCell component="th" scope="row" align="center">
						{item.status}
						</TableCell>
					</div> */}

      <IconButton
        aria-label="delete"
        size="large"
        color="error"
        onClick={handleDeleteClick}
      >
        <DeleteIcon className="deleteButton" fontSize="inherit" />
      </IconButton>
      {isEditClicked && (
        <IconButton
          onClick={handleEditButtonClick}
          aria-label="edit"
          size="large"
        >
          <EditIcon className="editIcon" fontSize="inherit" />
        </IconButton>
      )}
      {!isEditClicked && (
        <IconButton
          onClick={handleSaveButtonClick}
          aria-label="save"
          size="large"
        >
          <SaveIcon className="saveIcon" fontSize="inherit" />
        </IconButton>
      )}
    </TableRow>
  );
};

export default ItemRow;
