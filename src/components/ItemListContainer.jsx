import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Swipe from "./Swipe";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";
import arrayProductos from "/xampp2/htdocs/preentrega2rivarola/src/json/productos.json";
 

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    /*useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
               resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
           }, 2000);
       });
       promesa.then((respuesta) => {
           setItems(respuesta);
       });
    }, [id]);*/
 //useEffect (() =>{
  //   const ref = doc (db, "Items","gMjyXD7dhGN9jukHtnQC");
 //
  //  getDoc(ref)
  //    .then((snapshot)=>{if(snapshot.exists()){
 //       setItems([{id:snapshot.id,...snapshot.data()}])
 //    }
 //    })
 //   .catch((err)=> console.log(err.msg));
 // },[]);

/* useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
    getDocs(filter).then(elements => {
        setItems(elements.docs.map(element => ({id:element.id, ...element.data()})));
    });
}, [id]);
*/
useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    arrayProductos.array.forEach(item => {
        addDoc(itemsCollection, item);
    });

    console.log("Se agregaron los prod");
},[]);

return (
    <div className="container">
        <Swipe/>
        {loading ? <Loading /> : <ItemList items={items} />}

    </div>
)
}

export default ItemListContainer;