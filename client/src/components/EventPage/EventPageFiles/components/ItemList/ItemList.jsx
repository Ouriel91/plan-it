import React, { useState } from "react";
import "./ItemList.css";

import {
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



import ItemRowConnector from "./ItemRow/ItemRowConnector";


function ItemList({ items }) {


  return (
    <TableBody className="datagrid">
      <TableRow>
        <TableCell className="table-titles">Item to bring</TableCell>
        <TableCell className="table-titles">Quntity</TableCell>
        <TableCell className="table-titles">Who bring</TableCell>
        <TableCell className="table-titles">Status</TableCell>
      </TableRow>
        {items.map((item) => {
          return <ItemRowConnector item={item} key={item.id} />;
        })}

    </TableBody>
  );
}

export default ItemList;
