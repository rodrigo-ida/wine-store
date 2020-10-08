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
                        <li>Alsace wine</li>
                        <li>Bordeaux wine</li>
                        <li>Burgundy wine</li>
                        <li>Loire Valley</li>
                        <li>Provence</li>
                        <li>Region wine</li>
                        <li>Nebbiolo</li>
                    </ul>
                </li>
                <li>
                    <ul className="wine-hover__list__types">
                        <li>Italian Wine</li>
                        <hr></hr>
                        <li>Sangiovese</li>
                        <li>Montepulciano</li>
                        <li>Barbera</li>
                        <li>Primitivo</li>
                        <li>Dolcetto</li>
                        <li>Nebbiolo</li>
                        <li>Monsant Wine</li>
                    </ul>
                </li>
                <li>
                    <ul className="wine-hover__list__types">
                        <li>Espanhóis</li>
                        <hr></hr>
                        <li>Mallorca Wine</li>
                        <li>Catlan Wine</li>
                        <li>Terrerazo Wine</li>
                        <li>Priorat Wine</li>
                        <li>Ribera del Duero</li>
                        <li>Monsant Wine</li>
                        <li>Alsace wine</li>
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