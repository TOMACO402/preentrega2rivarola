import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col d-flex align-items-center justify-content-end">
                    <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="col d-flex align-items-center">
                    <div>
                        <h2>{item.nombre}</h2>
                        <p>Detalles del producto:{item.descripcion}</p>
                        <p><b>${item.precio}</b></p>
                        <h5>Color:{item.color}</h5>
                        <h5>Talle:{item.talle}</h5>

                        <ItemCount stock={item.stock} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;