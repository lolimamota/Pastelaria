//import tools
import React, {useState} from "react";
import styled from "styled-components";

//import images
import Pastel4 from "./img/cestinha_4pasteis.png";
import Pastel10 from "./img/cestinha_10pasteis.png";
import Caldo from "./img/caldodecana.png";
import Coca from "./img/coca.png";
import Drink from "./img/drink.png";
import Laranja from "./img/laranja.png";
import Morango from "./img/morango.png"
import Carrinho from "./img/carrinho.png"
// import CarrinhoPag from "./img/carrinhopag.png"

//import styled-components
const Img = styled.img
`width: 180px;
`;

const Section = styled.section
`display: flex;
justify-content: space-around;
align-items: center;

`;

const Titulo = styled.h1
`font-size: 4rem;
`;

const Meio = styled.main
`background: linear-gradient(to top, #D78B30, transparent);
`;


export default function Main(){
    const [item, setItem] = useState (0);
const Adc = ()=>{
    if(item <= 9){
        setItem(item + 1)
    }
}

    return(
        <Meio>
        <Titulo>CARDÁPIO</Titulo>
        <h2>Cestas de pasteis</h2>
        <Section className="Comes">
            <div>
                <Img src={Pastel4} alt="Cesta com alguns pasteis dentro" />
                <h4>{item} itens</h4>
                <img onClick={Adc} src={Carrinho} alt="imagem de um carrinho de compras" />
            </div>
            <div>
                <Img src={Pastel10} alt="Cesta com alguns pasteis dentro" />
            </div>
        </Section>
        <h2>Bebidas</h2>
        <Section className="Bebes">
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
        </Section>
        </Meio>
    )
}