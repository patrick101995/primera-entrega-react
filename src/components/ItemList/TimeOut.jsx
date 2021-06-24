import { useEffect } from "react"
import { ItemList } from "./ItemList"
import { getData } from "../../utils/functions";
import { useState } from "react";

export const TimeOut = () => {

    const [productos, setProductos ] = useState([]);

  useEffect(() => {
    const waitForData = async () => {
      console.log(await getData());
    };
    setProductos(waitForData());
  }, []);

    useEffect(() => {
        const timer = setTimeout(() =>{
            <ItemList productos={productos}/>
            console.log(productos)
        })
    })

    return <ItemList/>

}