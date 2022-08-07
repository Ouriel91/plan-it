import { TableCell, TextField} from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";
import React from "react";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import "./ItemRow.css";

const ItemRow = ({ item, saveItemAction, deleteItemAction, users }) => {
  console.log(users,'autocomplete')
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

 const  handleBringNameChange = (e,value) => {
  setBringName(value);
  
 }

  const handleDeleteClick = async () => {
    await deleteItemAction(item.id, item.eventId);
  };

  return (
    <>
      <tr
        className={!isEditClicked ? "table-row" : "table-row-edit"}
        id={item.id}
      >
        <TableCell style={{borderBottom: "none"}}>
          <TextField
            style={{ width: "200px"}}
            type="text"
            value={itemName}
            size="medium"
            id="standard-basic" variant="standard"
            disabled={!isEditClicked}
            onChange={(e) => setItemName(e.target.value)}
            name="itemName"
            InputProps={{
              style: {
                fontSize: 20,
                fontFamily: "Abel",
                fontStyle: "normal",
                fontWeight: "bold",
              },
            }}
          />
        </TableCell>
        <TableCell style={{borderBottom: "none"}}>
          <TextField
            style={{ width: "200px" }}
            value={quantity}
            name="quantity"
            type="number"
            disabled={!isEditClicked}
            onChange={(e) =>
              setQuantity(
                e.target.value < 0 ? (e.target.value = 0) : e.target.value
              )
            }
            InputProps={{
              style: {
                fontSize: 20,
                fontFamily: "Abel",
                fontStyle: "normal",
                fontWeight: "bold",
              },
            }}
          />
        </TableCell>
        <div className="margin-autocomplete">
          <Autocomplete
            style={{ width: "200px", fontSize: "25px" }}
            variant="standard"
            options={users.map((user) => user.fullName)}
            value={bringName}
            readOnly={!isEditClicked}
            onChange={handleBringNameChange}
            renderInput={(params) => <TextField {...params} InputProps={{...params.InputProps ,...{ style: { fontSize: 22, fontFamily: "Abel", fontStyle: "normal" } }}} />}
          
          />
        </div>
        <div className="margin-checkbox">
            <input
              label="Status"
              name="status"
              type="checkbox"
              defaultChecked={status}
              disabled={!isEditClicked}
              onChange={(e) => setStatus(e.target.checked)}>
            </input>
        </div>    

<div className="margin-icons">
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
                <SaveAltIcon className="saveIcon " style={{ fontSize: 25}} />
              </IconButton>
            )}

                    <IconButton
            aria-label="delete"
            size="large"
            onClick={handleDeleteClick}
          >
            <DeleteIcon className="deleteButton" style={{ fontSize: 25 }} />
          </IconButton>
</div>
           


      </tr>
    </>
  );
};

export default ItemRow;
