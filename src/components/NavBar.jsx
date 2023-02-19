import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const Navbar = () => {
    return(
        <div className="container mb-4">
            <div className="row">
                <div className="col mt-5">
                <nav className="navbar navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                    <div className="col-md-1"><Logo/></div>
                        <Link className="navbar-brand text--bs-light" to={"/"}>La Cresta Surf Shop</Link>
                        <div className="col d-flex align-items-center justify-content-end me-5">
                              <CartWidget/>
                            </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"><Logo/>La Cresta Surf Shop</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <NavLink className="nav-link active" activeclassname={"active"} to={"/"} aria-current="page" href={"/"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/category/mujeres"}>Mujeres</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/category/hombres"}>Hombres</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/category/niños"}>Niños</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/category/skateysurf"}>Skate & Surf</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/politicas"}>Políticas de Compra y Devolución</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/sobrenosotros"}>Sobre Nosotros</NavLink>
                            </li>
                            <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                            <button className="btn btn-info" type="submit">Buscar</button>
                            </form>
                        </ul>
                        </div>
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Navbar;