import React from  'react'

import ImagemAcessories from '../../../../assets/nav__acessories.png'

import './AcessoriesHover.css'

const AcessoriesHover = props => {
    
    return(
        <div className='acessorios-hover'>
            <ul className="acessorios-hover__main-list">
                <li>
                    <ul className="acessorios-hover__list">
                        <li>Acessórios</li>
                        <hr></hr>
                        <li>Taças</li>
                        <li>Abridores de garrafa</li>
                        <li>Coolers</li>
                        <li>Decantadores</li>
                        <li>Funis</li>
                        <li>Racks</li>
                        <li>Preservação</li>
            </ul>
                </li>
                <li>
                    <ul className="acessorios-hover__latest">
                        <li>Últimos Produtos</li>
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