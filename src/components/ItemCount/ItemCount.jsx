import React from "react";
import { useState } from "react";

export const ItemCount = ({onAdd, stock, initial}) => {

    
  let [valor, setValor] = useState (initial)

  const agregar = () =>{
    if(stock > valor){
      valor++
      setValor(valor)
    }
  }

  const quitar = () =>{
    if(valor !== 1){
      valor--
      setValor(valor)
    }

  }


  return (
    <div className="inline d-block-flex">
    <span className="card flex-row justify-content-around">
        <button  onClick={quitar}>-</button>
        <p>{valor}</p>
        <button onClick={agregar}>+</button>
    </span>
    <span>
        <button className="btn btn-dark" onClick={() => onAdd(valor)}>
            Agregar al Carrito
        </button>
    </span>
    </div>
  );
};
