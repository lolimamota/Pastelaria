//import tools
import React from "react";
import styled from "styled-components";

// import images
import Logo from "./img/pastelaria.png";

//funçoes do styled-components

const Ul = styled.ul
    `width: 50vw;
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
    background: linear-gradient(to bottom, #D78B30, transparent);
    color: black;
    `;

//componente funcional
export default function Header(){
    return(
        <Nav>
            <Img src={Logo} alt="Logo da pastelaria ling ling com dois pasteis"/>
            <Ul>
                <li>Inicio</li>
                <li>Cardápio</li>
                <li>Delivery</li>
                <li>Carrinho</li>
            </Ul>
        </Nav>
    )
}