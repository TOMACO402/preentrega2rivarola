import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Error404 from "./components/Error404";
import Quienes from "./components/Quienes";
import Politicas from "./components/Politicas";
import Cart from "./components/Cart";
import CartContextProvider from "./components/context/CartContext";
import ThankYou from "./components/ThankYou";
import Checkout from "./components/Checkout";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar/>
          <Routes> 
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/Quienes"} element={<Quienes/>} />
            <Route path={"/Politicas"} element={<Politicas />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/thankyou/:orderId"} element={<ThankYou />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;