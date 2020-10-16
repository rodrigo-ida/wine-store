import React from 'react'

import Image from  '../../../../assets/lista-oferta.png'
import Image1 from '../../../../assets/lista-imagem1.png'
import Image2 from '../../../../assets/lista-imagem2.png'

import './WineHover.css'


const WineHover = props => {

 
    
    return(
        <div className='wine-hover'>
            <ul className="wine-hover__list">
                <li>
                    <ul className="wine-hover__list__types">
                        <li>Franceses</li>
                        <hr></hr>
                        <li>Alsace</li>
                        <li>Bordeaux</li>
                        <li>Burgundy</li>
                        <li>Loire Valley</li>
                        <li>Provence</li>
                        <li>Region</li>
                        <li>Nebbiolo</li>
                    </ul>
                </li>
                <li>
                    <ul className="wine-hover__list__types">
                        <li>Italianos</li>
                        <hr></hr>
                        <li>Sangiovese</li>
                        <li>Montepulciano</li>
                        <li>Barbera</li>
                        <li>Primitivo</li>
                        <li>Dolcetto</li>
                        <li>Nebbiolo</li>
                        <li>Monsant</li>
                    </ul>
                </li>
                <li>
                    <ul className="wine-hover__list__types">
                        <li>Espanhóis</li>
                        <hr></hr>
                        <li>Mallorca</li>
                        <li>Catlan</li>
                        <li>Terrerazo</li>
                        <li>Priorat</li>
                        <li>Ribera del Duero</li>
                        <li>Monsant</li>
                        <li>Alsace</li>
                    </ul>
                </li>
                <li>
                    <ul className="wine-hover__list__oferta">
                        <li>Oferta especial</li>
                        <hr></hr>
                        <li><img src={Image} alt="vinho em oferta"/></li>
                        <span> Exclusivo: R$ 89,99</span>
                    </ul>
                </li>
            </ul>
            <ul className="wine-hover__image">
                <li><img src={Image1} alt=" promocao"/></li>
                <li><img src={Image2} alt=" promocao exclusiva"/></li>
            </ul>
        </div>
        )
    }

    export default WineHover