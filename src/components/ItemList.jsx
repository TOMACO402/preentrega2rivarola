import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row my-5">
            {items.map(item => (
            <div className="col-md-4" key={item.index}>
                <Item item={item} />
            </div>
        ))}
        </div>
    )
}

export default ItemList;