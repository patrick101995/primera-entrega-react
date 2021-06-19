import "./styles.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemListContainer = ({greeting}) => {

    return (
    <div className="card2">
    <h1>{greeting}</h1>
    <ItemCount/>
    </div>
);
};
