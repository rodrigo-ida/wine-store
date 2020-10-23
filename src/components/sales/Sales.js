import React from 'react'

import SalesCard from './salesCard/salesCard'

import PhotoFresh from "../../assets/pos-header-img1.png" 
import PhotoSpecial from "../../assets/pos-header-img2.png" 
import PhotoQuality from "../../assets/pos-header-img3.png" 

import './Sales.css'

export default props => {

    return(
        <div className="promocoes-container" >
            <SalesCard img={PhotoFresh} alt="foto de promoção recente" />
            <SalesCard img={PhotoSpecial} alt="foto de promoção especial" />
            <SalesCard img={PhotoQuality} alt="foto de promoção de qualidade superior" />
        </div>
    )
}
            // <div className="promocoes-container__fresh">
            //     <img src={PhotoFresh} alt="foto de promoção recente"/>
            // </div>
            // <div className="promocoes-container__special">
            // <img src={PhotoSpecial} alt="foto de promoção especial"/>

            // </div>
            // <div className="promocoes-container__quality">
            // <img src={PhotoQuality} alt="foto de promoção recente"/>