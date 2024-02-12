//import tools
import React, {useState} from "react";
import styled from "styled-components";
import Card from "./Card.jsx";

//import images
import Pastel4 from "./img/cestinha_4pasteis.png";
import Pastel10 from "./img/cestinha_10pasteis.png";
import Caldo from "./img/caldodecana.png";
import Coca from "./img/coca.png";
import Drink from "./img/drink.png";
import Laranja from "./img/laranja.png";
import Morango from "./img/morango.png"
import Carrinho from "./img/carrinho.png"
import CarrinhoPag from "./img/carrinhopag.png"
import Menos from "./img/menos.png"
import Mais from "./img/mais.png"
import Lixeirinha from "./img/delete.png"


export default function Main(){
    return(
        <main>
            <h1>CARDÁPIO</h1>
            <section className="comes">
                <Card title = 'Cesta com 4 pastéis' image={Pastel4} alt='Cesta com 4 pasteis'/>
                <Card title = 'Cesta com 10 pastéis' image={Pastel10} alt= 'Cesta com 10 pasteis'/>
            </section>
            <section className="bebes">

            </section>
        </main>
    )
}