import { useEffect } from "react";
import { useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { ItemCount } from "../ItemCount/ItemCount";





export const Item =  ( {objeto} ) =>{

    
const [item, setItem] = useState ({})
useEffect(()=>{
  const promesa1 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(objeto);
    }, 2000)
  })
  promesa1.then((item) =>{setItem(item)})
}, [])

const onAdd = (numero) =>{
  parseInt(numero)
  alert('Compraste '+numero+' productos')
  return numero
}

    return(
        <div className="card" >
            <img className="card-img-top" src={item.img} alt="Imagen"></img>
            <div className="card-body">
                <h5 className="card-title">{item.itemName}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.itemPrice}</p>
            </div>
            <ItemCount onAdd={onAdd} stock={10} initial={1}/>
        </div>
        
    )
}