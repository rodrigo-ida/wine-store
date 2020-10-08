import React from 'react'
import {NavLink} from 'react-router-dom'

import './Trending.css'


export default props => {

    return(
        <div className="trending" id="tendencias">
            <h1 className="trending__header"> Trending </h1>
            <h2 className="trending__fantasy-header"> Trending</h2>
            <div className="trending__buttons">

                <button className="trending__buttons__btn-destaque"> <NavLink to="/trendingDestaque" >Produtos Em Destaque</NavLink> </button>
                <button className="trending__buttons__btn-novidades"> <NavLink to="/trendingNovidades" >Novidades </NavLink></button>
                <button className="trending__buttons__btn-mais"> <NavLink to="/trendingMais" >Mais Vendidos </NavLink></button>

            </div>
        </div>

    )
}