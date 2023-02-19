import { useState, useEffect } from "react";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState(0);
    const [itemStock, setItemStock] = useState(stock);

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

    const onAdd = () => {
        if (itemStock >= items) {
            setItemStock(itemStock - items);
            setItems(0);
            console.log("Agregaste: " + items + " Productos al Carrito!");
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
                        <button className="btn btn-info" onClick={decrementarStock}>-</button>
                        <button className="btn btn-light">{items}</button>
                        <button className="btn btn-info" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    <button className="btn btn-info" onClick={onAdd}>Agregar Al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;