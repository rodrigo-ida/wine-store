import React from  'react'

import ImagemAcessories from '../../../../assets/nav__acessories.png'

import './AcessoriesHover.css'

const AcessoriesHover = props => {
    
    return(
        <div className='acessorios-hover'>
            <ul className="acessorios-hover__main-list">
                <li>
                    <ul className="acessorios-hover__list">
                        <li>Wine Accessories</li>
                        <hr></hr>
                        <li>Glasses</li>
                        <li>Bottle openers</li>
                        <li>Coolers</li>
                        <li>Decanters</li>
                        <li>Funnels</li>
                        <li>Racks</li>
                        <li>Preservation</li>
            </ul>
                </li>
                <li>
                    <ul className="acessorios-hover__latest">
                        <li>Latest Product</li>
                        <hr></hr>
                        <li> <img src={ImagemAcessories} alt="imagem de acessorio"/></li>
                        <span> Ubique: R$ 37,89</span>
                    </ul>
                </li>
            </ul>
           
            
        </div>
        )
    }

    export default AcessoriesHover