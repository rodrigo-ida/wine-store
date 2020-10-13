import React from 'react'
import {Link} from 'react-router-dom'

import './NavBurgerModal.css'

import NavItem from '../navItem/NavItem'

export default props => {

    const content = props.navBurgerBtnState ? (
        <div className="nav__burger-modal">
            <ul className="nav__burger-modal__list"> 
                <NavItem  classe="navItem__vinhos" >Vinhos</NavItem>
                <NavItem  classe="navItem__acessorios" >Acessorios</NavItem>
                <NavItem  classe="navItem__tendencias" > <Link to='/trendingDestaque#tendencias'>Tendências </Link></NavItem>
                <NavItem  classe="navItem__categorias" >Categorias</NavItem>
                <NavItem  classe="navItem__colecoes" >Coleções</NavItem>
                <NavItem  classe="navItem__contato" >Contato</NavItem>
                <NavItem  classe="navItem__sobre" >Sobre Nós</NavItem>
            </ul> 
        </div> ): ''

    return (<React.Fragment>
        {content} 
    </React.Fragment>
    )
}