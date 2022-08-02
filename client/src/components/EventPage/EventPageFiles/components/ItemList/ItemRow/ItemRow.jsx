import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

const ItemRow = ({ item, saveItemAction, eventId }) => {
  const [itemName, setItemName] = useState(item.itemName);
  const [quantity, setQuantity] = useState(item.quantity);
  const [bringName, setBringName] = useState(item.bringName);
  const [status, setStatus] = useState(item.status);
  const [isEditClicked, setEditClicked] = useState(false);

  const handleEditButtonClick = () => {
    setEditClicked(true);
  };

  const handleSaveButtonClick = async () => {
    try {
      const editItem = {
        itemName,
        quantity,
        bringName,
        status,
      };
      console.log(editItem, "editItem");
      await saveItemAction(editItem, item.id, item.eventId);
      setEditClicked(false);
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleDeleteClick = () => {
     };

  return (
    <TableRow id={item.id}>
      <div>
        <TableCell>
          <input
            style={{ border: "1px solid green", width: "100px" }}
            type="text"
            value={itemName}
            readOnly={!isEditClicked}
            onChange={(e) => setItemName(e.target.value)}
            name="itemName"
          />
        </TableCell>
        <TableCell>
          <input
            style={{ border: "1px solid green", width: "100px" }}
            value={quantity}
            name="quantity"
            readOnly={!isEditClicked}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </TableCell>
        <TableCell>
          <input
            style={{ border: "1px solid green", width: "100px" }}
            value={bringName}
            name="bringName"
            readOnly={!isEditClicked}
            onChange={(e) => setBringName(e.target.value)}
          />
        </TableCell>
        <TableCell>
          <input
            style={{ border: "1px solid green", width: "100px" }}
            value={status}
            name="status"
            readOnly={!isEditClicked}
            onChange={(e) => setStatus(e.target.value)}
          />
        </TableCell>
      </div>

      <IconButton
        aria-label="delete"
        size="large"
        color="error"
        onClick={handleDeleteClick}
      >
        <DeleteIcon className="deleteButton" fontSize="inherit" />
      </IconButton>
      {!isEditClicked && (
        <IconButton
          onClick={handleEditButtonClick}
          aria-label="edit"
          size="large"
        >
          <EditIcon className="editIcon" fontSize="inherit" />
        </IconButton>
      )}
      {isEditClicked && (
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
