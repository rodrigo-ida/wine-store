import React from  'react'

// import './TrendingDestaque.css'

import TrendingBody from '../trendingBody/TrendingBody'

import Img1 from '../../../assets/trending-1.png'
import Img2 from "../../../assets/trending-2.png"
import Img3 from "../../../assets/trending-3.png"
import Img4 from "../../../assets/trending-4.png"

import Card from '../trendingCards/TrendingCards'

export default props => {

    const body =  "Este vinho possui uma fragrancia de uva com gosto de uva e vem em estado liquido. Mas pode ser congelado"
    
    return (

        <TrendingBody >

                <Card img={Img4} body={body} title="Mallorca"/>
                <Card img={Img4} body={body} title="Catlan"/>
                <Card img={Img4} body={body} title="Terrerazo"/>
                <Card img={Img1} body={body} title="Priorat" />
                <Card img={Img2} body={body} title="Ribera"/>
                <Card img={Img3} body={body} title="Monsant"/>
                <Card img={Img1} body={body} title="Alsace" />
                <Card img={Img2} body={body} title="Montepulciano"/>
                <Card img={Img3} body={body} title="Barbera"/>
                <Card img={Img4} body={body} title="Primitivo"/>
                <Card img={Img4} body={body} title="Dolcetto"/>
                <Card img={Img4} body={body} title="Monsant"/>

        </TrendingBody>
        
        
        
        
        
        
        
        
        
        
        
        
        
    )
}

