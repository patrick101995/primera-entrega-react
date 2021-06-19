import React from "react";
import { useState } from "react";

export const ItemCount = () => {

  const agregarCarritoBtn = document.getElementsByClassName("btn-dark")
    
  const [valor, setValor] = React.useState (0)
  let stock = 10

  const agregar = () =>{
    if(stock > valor){
      setValor(valor + 1)
    }
    
  }

  const quitar = () =>{
    if(valor !== 0){
      setValor(valor - 1)
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
        <button className="btn btn-dark">
            Agregar al Carrito
        </button>
    </span>
    </div>
  );
};
