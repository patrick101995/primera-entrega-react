import React from "react";
import { useState } from "react";

export const ItemCount = () => {

    
  let [valor, setValor] = useState (1)
  let stock = 10

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

  const onAdd = (numero) =>{
    parseInt(numero)
    alert("Compraste "+numero+" productos")
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
