import React from "react";
import './Menu.css';


function Menu (){
    return (
        <div className="fondo">
            <nav>
                <ul className="menu">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="nosotros.html">Nosotros</a>
                    </li>
                    <li>
                        <a href="servicios.html">Servicios</a>
                    </li>
                    <li>
                        <a href="galeria.html">Galeria</a>
                    </li>
                    <li>
                        <a href="contacto.html">Contacto</a>            
                    </li>
                </ul>
            </nav>
        </div>
    )
        
}

export default Menu;