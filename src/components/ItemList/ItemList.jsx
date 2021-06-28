import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../../utils/functions";
import { Item } from "../Item/Item";


export const ItemList = ({productos}) => {


  return (
    <div>
        {productos.map((producto) => (
        <div item key={productos.id}>
          <Item objeto={producto} />
        </div>))}
    </div>
  );
};
