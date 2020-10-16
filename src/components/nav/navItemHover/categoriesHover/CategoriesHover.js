import React from 'react'

import ImagemCategorias from '../../../../assets/lista-categorias.png'

import './CategoriesHover.css'

    

const CategoriasHover = props => {

    return(
        <div className='categorias-hover'>
            <ul className="categorias-hover__main-list">
                <li>
                    <ul className="categorias-hover__first-list">
                        <li>Vinho Branco</li>
                        <hr></hr>
                        <li>Sauvignon Blanc</li>
                        <li>Verdelho</li>
                        <li>Semillon</li>
                        <li>Chardonnay</li>
                        <li>Riesling</li>
                        <li>White blends</li>
                        
                    </ul>
                </li>
                <li>
                    <ul className="categorias-hover__second-list">
                        <li>Vinho Tinto</li>
                        <hr></hr>
                        <li>Cabernet Franc</li>
                        <li>Cabernet Sauvignon</li>
                        <li>Gamay</li>
                        <li>Malbec</li>
                        <li>Merlot</li>
                        <li>Nebbiolo</li>
                    </ul>
                </li>
            </ul>
            <div className="categorias-hover__img-bottom">
                <img src={ImagemCategorias} alt="foto de vinho"/>
            </div>
        </div>
    )
}

export default CategoriasHover