//import tools
import React from "react";
import styled from "styled-components";

// import images
import Logo from "./img/pastelaria.png";

//funçoes do styled-components

const Ul = styled.ul
    `border: solid red;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    `;

const Img = styled.img
    `width: 200px;
    `;

const Nav = styled.nav
    `width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: black;
    color: white;
    `;

//componente funcional
export default function Header(){
    return(
        <Nav>
            <Img src={Logo} alt="Logo da pastelaria ling ling com dois pasteis"/>
            <Ul>
                <li>Inicio</li>
                <li>Cardapio</li>
                <li>Delivery</li>
                <li>Carrinho</li>
            </Ul>
        </Nav>
    )
}