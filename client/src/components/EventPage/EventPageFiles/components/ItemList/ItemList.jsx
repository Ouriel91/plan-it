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
    <>
      <div className="table-row2">
        <p className="table-titles">Item to bring</p>
        <p className="table-titles">Quantity</p>
        <p className="table-titles">Who brings</p>
        <p className="table-titles">Status</p>
      </div>

        {items.map((item) => {
          return <ItemRowConnector item={item} key={item.id} />;
        })}

    </>

  );
}

export default ItemList;
