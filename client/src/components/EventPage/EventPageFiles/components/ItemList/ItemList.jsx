import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import {
	Box, Button, Snackbar, Table,
	TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./ItemList.scss"
import { withTheme } from "@material-ui/styles";
// Creating styles
const useStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
	table: {
		minWidth: 650,
	},
	snackbar: {
		bottom: "104px",
	},
});

function ItemList({event,saveItemAction}) {
	// Creating style object
	const classes = useStyles();

	// Defining a state named rows
	// which we can update by calling on setRows function
	const [rows, setRows] = useState([]);
	console.log("event",event);
	console.log("rows",rows);
	// Initial states
	const [open, setOpen] = React.useState(false);
	const [isEdit, setEdit] = React.useState(false);
	const [disable, setDisable] = React.useState(true);
	const [showConfirm, setShowConfirm] = React.useState(false);
	const [itemId, setItemId] = React.useState(-1);

	// Function For closing the alert snackbar
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	// Function For adding new row object
	const handleAdd = () => {
		const id = rows.length+1
		setRows([
			...rows,
			{
				itemName:"",
				bringName: "", 
				quantity: "", 
				status: "", 
				itemId: id, 
				eventId:event.id
			},
		]);
		setItemId(id);
	};

	// Function to handle edit
	const handleEdit = (itemId) => {
		// If edit mode is true setEdit will
		// set it to false and vice versa
		/* setEdit(!isEdit); */
		setItemId(itemId);
		
	};

	// Function to handle save
	const handleSave = () => {
		setRows(rows);
		console.log("saved : ", rows);
		setDisable(true);
		setOpen(true);
		if(itemId !== -1){ //edit
			const id = rows.findIndex(row => row.id === itemId)
			saveItemAction(rows[id]);
		}else{ //add new one
			saveItemAction(rows[rows.length-1]);
		}	
		setItemId(-1);
	};

	// The handleInputChange handler can be set up to handle
	// many different inputs in the form, listen for changes
	// to input elements and record their values in state
	const handleInputChange = (e, index) => {
		setDisable(false);
		const { name, value } = e.target;
		const list = [...rows];
		list[index][name] = value;
		setRows(list);
	};

	// Showing delete confirmation to users
	const handleConfirm = () => {
		setShowConfirm(true);
	};

	// Handle the case of delete confirmation where
	// user click yes delete a specific row of id:i
	const handleRemoveClick = (i) => {
		const list = [...rows];
		list.splice(i, 1);
		setRows(list);
		setShowConfirm(false);
	};

	// Handle the case of delete confirmation
	// where user click no
	const handleNo = () => {
		setShowConfirm(false);
	};

return (
	<TableBody className="datagrid">
	<Snackbar
		open={open}
		autoHideDuration={2000}
		onClose={handleClose}
		className="datagrid"
        
	>
		<Alert onClose={handleClose} severity="success">
		Record saved successfully!
		</Alert>
	</Snackbar >
	<Box margin={1}>
		<div style={{ display: "flex", justifyContent: "space-between" }}>
		<div>
			<div>
				<Button className="link" onClick={handleAdd}>
				<AddBoxIcon onClick={handleAdd} />
				ADD
				</Button>
				<div>
					<Button align="right" onClick={handleSave}>
						<DoneIcon />
						SAVE
					</Button>		
				</div>
			</div>
		</div>
		</div>
		<TableRow align="center"></TableRow>

		<Table
		className={classes.table}
		size="small"
		aria-label="a dense table"
		>
		<TableHead className="datatableTitle">
			<TableRow>
			<TableCell>Item to bring</TableCell>
			<TableCell>Quntity</TableCell>
            <TableCell>Who bring</TableCell>
            <TableCell>Status</TableCell>
			<TableCell align="center"></TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			{rows.map((row, i) => {
			return (
				<div>
				<TableRow id={row.itemId}>
					{itemId === row.itemId ? (
					<div>
						<TableCell padding="none">
						<input
							style={{border: "1px solid green", width: "20px"}}
							value={row.itemName}
							name="itemName"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</TableCell>
						<TableCell padding="none">
						<input
							style={{border: "1px solid green", width: "20px"}}
							value={row.bringName}
							name="bringName"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</TableCell>
						<TableCell padding="none">
						<input
							style={{border: "1px solid green", width: "20px"}}
							value={row.quantity}
							name="quantity"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</TableCell>
						<TableCell padding="none">
						<input
							style={{border: "1px solid green", width: "20px"}}
							value={row.status}
							name="status"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</TableCell>
					</div>
					) : (
					<div>
						<TableCell component="th" scope="row">
						{row.itemName}
						</TableCell>
						<TableCell component="th" scope="row">
						{row.bringName}
						</TableCell>
						<TableCell component="th" scope="row" align="center">
						{row.quantity}
						</TableCell>
						<TableCell component="th" scope="row" align="center">
						{row.status}
						</TableCell>
					</div>
					)}
					<Button align="right" onClick={() => handleEdit(row.itemId)}>
						<CreateIcon />
						Edit
					</Button>			
					<Button className="mr10" onClick={handleConfirm}>
						<DeleteOutlineIcon />
					</Button>
					{showConfirm && (
					<div>
						<Dialog
						open={showConfirm}
						onClose={handleNo}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
						>
						<DialogTitle id="alert-dialog-title">
							{"Confirm Delete"}
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
							Are you sure to delete
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button
							onClick={() => handleRemoveClick(i)}
							color="primary"
							autoFocus
							>
							Yes
							</Button>
							<Button
							onClick={handleNo}
							color="primary"
							autoFocus
							>
							No
							</Button>
						</DialogActions>
						</Dialog>
					</div>
					)}
				</TableRow>
				</div>
			);
			})}
		</TableBody>
		</Table>
	</Box>
	</TableBody>
);
}

export default ItemList;