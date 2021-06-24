import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../../utils/functions";
import { Item } from "../Item/Item";

const productos = [
  { id: 1, name: "zapatillas", description: "Zapatillas para correr", price:"55", photo:"./logo512.png"},
  { id: 2, name: "macbook", description: "pc macbook", price:"99,99", photo:"./logo512.png"},
];

export const ItemList = () => {
  /* 
    const [productos, setProductos ] = useState([]); */

  /*    useEffect( () => {
        const waitForData = async () => {
            console.log(await getData())
        }
        setProductos(waitForData());
    }, []) */

  /*     const [item, setItem] = useState ('')
    useEffect(()=>{
      const promesa1 = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Hola!");
        }, 3000)
      })
      promesa1.then(result =>{
        <div>
        {productos.map((producto) => (
            <div item key={producto.id}>
                <Item producto={producto}/>
            </div>
        ))}
      </div>
    })
    }, []) */

  return (
    
                <div>
                    {productos.map((producto) => (
                    <div item key={productos.id}>
                        <Item objeto={producto} />
                    </div>
                    ))}
                </div>

  );
};
