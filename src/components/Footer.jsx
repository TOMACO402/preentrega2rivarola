import facebook from "/xampp2/htdocs/preentrega2rivarola/src/images/facebook.svg";
import instagram from "/xampp2/htdocs/preentrega2rivarola/src/images/instagram.svg";
import twitter from "/xampp2/htdocs/preentrega2rivarola/src/images/twitter.svg";
import youtube from "/xampp2/htdocs/preentrega2rivarola/src/images/youtube.svg";
import logo2 from "/xampp2/htdocs/preentrega2rivarola/src/images/logo2.png";
import {NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <a href={"/"} className="me-3"><img src={facebook} alt={"Facebook"} width={"30"} ></img></a>
                    <a href={"/"} className="me-3"><img src={instagram} alt={"Instagram"} width={"30"} ></img></a>
                    <a href={"/"} className="me-3"><img src={twitter} alt={"Twitter"} width={"30"} ></img></a>
                    <a href={"/"} className="me-3"><img src={youtube} alt={"Youtube"} width={"30"} ></img></a>
                </div>
            </div>
            <div className="row my-5">
                <div className="col md-8">
                    <ul className="nav">
                            <li class="nav-item">
                            <NavLink className="nav-link text-secondary" activeclassname={"active"} to={"/Politicas"}>Politicas de compra y devolución</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-secondary" activeclassname={"active"} to={"/Quienes"}>Quienes Somos</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href={"https://www.argentina.gob.ar/produccion/defensadelconsumidor/hacer-un-reclamo"}>Defensa al consumidor</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Contacto</a>
                            </li>
                    </ul>
                </div>
                <div className="col-md-4 align-items-center">
                    <p className="text--bs-dark"> <img src={logo2} alt={"lacresta2"} width={100}></img>®LaCrestaSurfShop</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;