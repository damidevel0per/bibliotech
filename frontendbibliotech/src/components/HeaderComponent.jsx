import React from "react";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";

function HeaderComponent(){
    return(
        <header className="header">
            <h3 className="title">Bibliotech</h3>
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link className="link" to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link className="link" to="/libros">Biblioteca</Link>
                    </li>
                    <li>
                        <Link className="link" to="/nosotros">Nosotros</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent;