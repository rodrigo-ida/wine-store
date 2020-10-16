import React from 'react'

import { HashLink as Link } from 'react-router-hash-link';

import './NavDesktopContent.css'

import WineHover from '../navItemHover/wineHover/WineHover'
import AcessoriesHover from '../navItemHover/acessoriesHover/AcessoriesHover'
import CategoriesHover from '../navItemHover/categoriesHover/CategoriesHover'

import NavItem from '../navItem/NavItem'

export default props => {

    let modalElement = ''
    if(props.navModalState === 'navItem__vinhos'){
        modalElement = <WineHover />
    }
    if(props.navModalState === 'navItem__acessorios'){
        modalElement = <AcessoriesHover />
    }
    if(props.navModalState === 'navItem__categorias'){
        modalElement = <CategoriesHover />
    }

    return <div className="nav-desktop-content">
        <ul className="nav-desktop-content__list"> 
            <NavItem showNavModal={props.showNavModal} navModalState={props.navModalState} hideNavModal={props.hideNavModal} modalElement={modalElement} classe="navItem__vinhos" >Vinhos</NavItem>
            <NavItem showNavModal={props.showNavModal} navModalState={props.navModalState} hideNavModal={props.hideNavModal} modalElement={modalElement} classe="navItem__acessorios" >Acessorios</NavItem>
            <NavItem  classe="navItem__tendencias" > <Link to='/trendingDestaque#tendencias'>Tendências </Link></NavItem>
            <NavItem showNavModal={props.showNavModal} navModalState={props.navModalState} hideNavModal={props.hideNavModal} modalElement={modalElement}  classe="navItem__categorias" >Categorias</NavItem>
            <NavItem  classe="navItem__colecoes" >Coleções</NavItem>
            <NavItem  classe="navItem__contato" >Contato</NavItem>
            <NavItem  classe="navItem__sobre" >Sobre Nós</NavItem>
        </ul>
        <ul className="nav-desktop-content__list__icons">
            <NavItem> <i className="fas fa-search"></i></NavItem>
            <NavItem> <i className="fas fa-user"></i> </NavItem>
            <NavItem> <i className="fas fa-shopping-cart"></i><p className="nav-desktop-content__list__icons__qtd">0</p></NavItem>
        </ul>
    </div>
}