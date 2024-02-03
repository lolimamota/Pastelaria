//import tools
import React from "react";
import styled from "styled-components";

//import styled-components
const Img = styled.img
`width: 250px;
`;

const Section = styled.section
`display: flex;
justify-content: space around;
align-items: center;
`;

//import images
import Pastel4 from "./img/cestinha_4pasteis.png";
import Pastel10 from "./img/cestinha_10pasteis.png";
import Caldo from "./img/caldodecana.png";
import Coca from "./img/coca.png";
import Drink from "./img/drink.png";
import Laranja from "./img/laranja.png";
import Morango from "./img/morango.png"

// const Main = styled.main
// `background-color: #E7482E;
// `;

export default function Main(){
    return(
        <section>
        <h1>Cardápio</h1>
        <section className="Comes">
            <div>
                <Img src={Pastel4} alt="Cesta com alguns pasteis dentro" />
            </div>
            <div>
                <Img src={Pastel10} alt="Cesta com alguns pasteis dentro" />
            </div>
        </section>
        <section className="Bebes">
            <div>
                <Img src={Caldo} alt="Copo com caldo de cana" />
            </div>
            <div>
                <Img src={Coca} alt="Copo com refrigerante" />
            </div>
            <div>
                <Img src={Drink} alt="Copo com um drink azul" />
            </div>
            <div>
                <Img src={Laranja} alt="Copo com suco de laranja" />
            </div>
            <div>
                <Img src={Morango} alt="Copo com suco de morango" />
            </div>
        </section>
        </section>
    )
}