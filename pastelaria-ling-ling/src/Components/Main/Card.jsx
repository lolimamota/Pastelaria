import React, { useState } from "react";
import Menos from "../Main/img/menos.png"
import Mais from "../Main/img/mais.png"
import Carrinho from "../Main/img/carrinho.png"
import Pastel4 from "../Main/img/cestinha_4pasteis.png"


export default function Card({title, image, alt}) {
    const [item, setItem] = useState(0);
    const Adc = () => { setItem(prevItem => prevItem <= 9 ? prevItem + 1 : prevItem) };
    const Rem = () => { setItem(prevItem => prevItem > 0 ? prevItem - 1 : prevItem) };

    return (
        <>
            <div>
                <h4>{title}</h4>
                <img src={image} alt={alt} />
            </div>
            <div>
            <h2>{item}</h2>
            <button onClick={Rem}>Leve <img src={Menos} alt="Sinal de subtração" /></button>
            <button onClick={Adc}>Leve <img src={Mais} alt="Sinal de adição" /></button>
            <button>Comprar <img src={Carrinho} alt="Imagem de um carrinho de compra" /></button>
            </div>
        </>
    )
}