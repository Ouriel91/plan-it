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
      <div className="table-row">
      <p className="table-titles">Item to bring</p>
      <p className="table-titles">Quntity</p>
      <p className="table-titles">Who bring</p>
      <p className="table-titles">Status</p>
      </div>
      <div>
        {items.map((item) => {
          return <ItemRowConnector item={item} key={item.id} />;
        })}
      </div>
    </TableBody>
  );
}

export default ItemList;
