import "./styles.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";


export const ItemListContainer = ({greeting}) => {

    return (
    <div className="card2">
    <h1>{greeting}</h1>
    <ItemList/>
    </div>
);
};
