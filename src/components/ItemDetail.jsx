import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col d-flex align-items-center justify-content-end">
                    <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="col d-flex align-items-center">
                    <div>
                        <h1>{item.nombre}</h1>
                        <p>{item.descripcion}</p>
                        <p><b>${item.precio}</b></p>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;;