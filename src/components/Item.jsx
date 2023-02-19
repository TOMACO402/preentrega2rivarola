import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.index} className="text-decoration-none text-dark">
            <div className="card border-0">
                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body text-center">
                    <p className="card-title">{item.nombre}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;