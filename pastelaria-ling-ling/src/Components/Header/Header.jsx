//import tools
import React from "react";
// import styled from "styled-components";

// import images
import Logo from "./img/pastelaria.png";

//funçoes do styled-components



//componente funcional
export default function Header(){
    return(
        <nav>
            <img src={Logo} alt="Logo da pastelaria ling ling com dois pasteis"/>
            <ul>
                <li>Inicio</li>
                <li>Cardapio</li>
                <li>Delivery</li>
                <li>Carrinho</li>
            </ul>
        </nav>
    )
}