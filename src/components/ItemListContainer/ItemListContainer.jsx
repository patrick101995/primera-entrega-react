import "./styles.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";
import { getData } from "../../utils/functions";
import { useState } from "react";
import { useEffect } from "react";


export const ItemListContainer = ({greeting}) => {

    let [productos, setProductos] = useState([]);

    useEffect(() => {
        const waitForData = async () => {
        const data = await getData()
        setProductos(data);
        return data
        };
        waitForData()
    }, []);



    return (
    <div className="card2">
    <h1>{greeting}</h1>
    {productos.length ===0 ? <div>Loading...</div> : <ItemList productos={productos}/> }
    </div>
);
};
