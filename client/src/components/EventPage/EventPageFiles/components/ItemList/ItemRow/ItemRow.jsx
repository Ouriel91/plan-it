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

  const handleDeleteClick = async () => {
    await deleteItemAction(item.id, item.eventId);
  };

  return (
    <>
      <tr className="table-row" id={item.id}               
      style={{
                className: !isEditClicked ? 'table-row-edit' : 'table-row',
              }} 
              >
        <TableCell>
          <TextField
            style={{ width: "200px" }}
            type="text"
            value={itemName}
            size="medium"
            disabled={!isEditClicked}
            onChange={(e) => setItemName(e.target.value)}
            name="itemName"
            InputProps={{ style: { fontSize: 20, fontFamily: 'Abel', fontStyle: "normal", fontWeight: "bold" } }}
          />
        </TableCell>

        <TableCell>
          <TextField
            style={{ width: "200px" }}
            value={quantity}
            name="quantity"
            type="number"
            disabled={!isEditClicked}
            onChange={(e) => setQuantity(e.target.value < 0
              ? (e.target.value = 0)
              : e.target.value)}
            InputProps={{ style: { fontSize: 20, fontFamily: 'Abel', fontStyle: "normal", fontWeight: "bold" } }}
          />
        </TableCell>
        <TableCell>
          <TextField
            style={{ width: "200px" }}
            value={bringName}
            name="bringName"
            type="text"
            disabled={!isEditClicked}
            onChange={(e) => setBringName(e.target.value)}
            InputProps={{ style: { fontSize: 20, fontFamily: 'Abel', fontStyle: "normal", fontWeight: "bold" } }}
          />
        </TableCell>
        <TableCell>
          <FormControl >
            <Checkbox
              value={status}
              label="Status"
              name="status"
              defaultChecked={status}
              disabled={!isEditClicked}
              InputProps={{ style: { fontSize: 40 } }}
              onChange={(e) => setStatus(e.target.value)}>
            </Checkbox>
          </FormControl>
        </TableCell>    
        <TableCell className="hello">
        <TableCell>
            {!isEditClicked && (
              <IconButton
                onClick={handleEditButtonClick}
                aria-label="edit"
                size="large"
              >
                <EditIcon className="editIcon" style={{ fontSize: 25 }} />
              </IconButton>
            )}

            {isEditClicked && (
              <IconButton
                onClick={handleSaveButtonClick}
                aria-label="save"
                size="large"
              >
                <SaveIcon className="saveIcon" style={{ fontSize: 25 }} />
              </IconButton>

            )}
          </TableCell>
   
          <TableCell>
                    <IconButton
            aria-label="delete"
            size="large"
            color="error"
            onClick={handleDeleteClick}
          >
            <DeleteIcon className="deleteButton" style={{ fontSize: 25 }} />
          </IconButton>
          </TableCell>

        </TableCell>
      </tr>
    </>
  )
}

export default ItemRow;
