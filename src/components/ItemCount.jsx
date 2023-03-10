import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState(0);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 0) {
            setItems(items - 1);
        }
    }

    const addToCart = () => {
        if (itemStock >= items) {
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock]);

    return (
        <div className="container">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group">
                        <button className="btn btn-warning" onClick={decrementarStock}>-</button>
                        <button className="btn btn-warning">{items}</button>
                        <button className="btn btn-warning" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-warning">Terminar Mi Compra</Link> : <button className="btn btn-warning" onClick={addToCart}>Agregar Al Carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;