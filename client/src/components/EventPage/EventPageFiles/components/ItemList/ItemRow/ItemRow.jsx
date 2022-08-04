import { Checkbox, TableCell, TableRow, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import "./ItemRow.css";

const ItemRow = ({ item, saveItemAction, deleteItemAction }) => {
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
      await saveItemAction(editItem, item.id, item.eventId);
      setEditClicked(false);
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleDeleteClick = async  () => {
    await deleteItemAction(item.id, item.eventId);
     };

  return (
    <TableRow id={item.id}>
      <div className="table-row">
        <div>
          <TextField
            style={{ width: "100px" }}
            type="text"
            value={itemName}
            disabled={!isEditClicked}
            onChange={(e) => setItemName(e.target.value)}
            name="itemName"
          />
        </div>
        <div>
          <TextField
            style={{ width: "100px" }}
            value={quantity}
            name="quantity"
            type="number"
            disabled={!isEditClicked}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <TextField
            style={{ width: "100px" }}
            value={bringName}
            name="bringName"
            type="text"
            disabled={!isEditClicked}
            onChange={(e) => setBringName(e.target.value)}
          />
        </div>
        <div>
        <FormControl sx={{ m: 0, minWidth: 200 }} size="small">
  
      <Checkbox
        
        value={status}
        label="Status"
        name="status"
        defaultChecked={status}
            disabled={!isEditClicked}
            onChange={(e) => setStatus(e.target.value)}
      >
        
        <MenuItem value="pending">Pending</MenuItem>
        <MenuItem value="done"> Done</MenuItem>
      </Checkbox>
    </FormControl>
        </div>
        <TableCell>
          <IconButton
            aria-label="delete"
            size="large"
            color="error"
            onClick={handleDeleteClick}
          >
            <DeleteIcon className="deleteButton" fontSize="inherit" />
          </IconButton>
        </TableCell>
      {!isEditClicked && (
        <TableCell>
          <IconButton
            onClick={handleEditButtonClick}
            aria-label="edit"
            size="large"
          >
            <EditIcon className="editIcon" fontSize="inherit" />
          </IconButton>
        </TableCell>
      )}
      {isEditClicked && (
        <TableCell>
          <IconButton
            onClick={handleSaveButtonClick}
            aria-label="save"
            size="large"
          >
            <SaveIcon className="saveIcon" fontSize="inherit" />
          </IconButton>
        </TableCell>
      )}
      
      </div>
    </TableRow>
  );
};

export default ItemRow;
