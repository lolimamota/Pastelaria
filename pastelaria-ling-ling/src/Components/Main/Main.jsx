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
import Menos from "./img/menos.png"
import Mais from "./img/mais.png"
import Lixeirinha from "./img/delete.png"

//import styled-components
const Img = styled.img
`width: 180px;
`;

const Section = styled.section
`width: 33.3%;
border: solid red;
display: flex;
flex-direction:column;
justify-content: space-around;
align-items: center;

`;

const Comes = styled.section
`width: 33.3%;
background-color:white;
border: solid red;
display: flex;
flex-direction:column;
justify-content: space-around;
align-items: center;

`;

const Pastelzinho = styled.div
`display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Move = styled.div
`display: flex;
`;

const Titulo = styled.h1
`font-size: 4rem;
`;

const Meio = styled.main
`display:flex;
background: linear-gradient(to top, #D78B30, transparent);
`;


export default function Main(){
    const [item, setItem] = useState (0);
const Adc = ()=>{
    if(item <= 9){
        setItem(item + 1)
    }
}

    return(
        <>
        <Titulo>CARDÁPIO</Titulo>
        <Meio>
        <Comes>
        <h2>Cestas de pasteis</h2>
            <Pastelzinho>
                
                <Img src={Pastel4} alt="Cesta com alguns pasteis dentro" />
                <Move>
                <img src={Menos} alt="sinal de menos" />
                <h4>{item} itens</h4>
                <img src={Mais} alt="sinal de mais" />
                <img src={Lixeirinha} alt="sinal de lixeira" />
                </Move>
                
                <img onClick={Adc} src={Carrinho} alt="imagem de um carrinho de compras" />
            </Pastelzinho>
            <div>
                <Img src={Pastel10} alt="Cesta com alguns pasteis dentro" />
            </div>
        </Comes>
        <Section className="Bebes">
        <h2>Bebidas</h2>
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
        <Section className="carrinhoDeCompras">
            <h2>Pagamento</h2>
            <div>produtos</div>
            <div>valor</div>
            <div>ir para pagamento</div>
        </Section>
        </Meio>
        </>
    )
}