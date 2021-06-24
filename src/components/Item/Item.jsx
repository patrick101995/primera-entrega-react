import { useEffect } from "react";
import { useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { ItemCount
 } from "../ItemCount/ItemCount";





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

    return(
        <div className="card" >
            <img className="card-img-top" src={item.photo} alt="Imagen"></img>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.price}</p>
            </div>
            <ItemCount/>
        </div>
        
    )
}