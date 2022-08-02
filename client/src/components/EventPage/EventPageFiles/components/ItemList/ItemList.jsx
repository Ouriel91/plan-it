import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import {
  Box,
  Button,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

import "./ItemList.scss";
import ItemRowConnector from "./ItemRow/ItemRowConnector";
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


const handleClose = () => {

}

function ItemList({ event, items }) {
  // Creating style object
  const classes = useStyles();

  return (
    <TableBody className="datagrid">
      <Snackbar
        // open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        className="datagrid"
      >
        <Alert onClose={handleClose} severity="success">
          Record saved successfully!
        </Alert>
      </Snackbar>
      <Box margin={1}>
        <div style={{ display: "flex", justifyContent: "space-between" }}></div>
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
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => {
              console.log(item);
              return <ItemRowConnector item={item} key={item.id} />;
            })}
          </TableBody>
        </Table>
      </Box>
    </TableBody>
  );
}

export default ItemList;
