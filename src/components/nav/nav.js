import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './nav.css'

import NavItem from './navItem/NavItem'

import WineHover from './navItemHover/wineHover/WineHover'
import AcessoriesHover from './navItemHover/acessoriesHover/AcessoriesHover'
import CategoriesHover from './navItemHover/categoriesHover/CategoriesHover'



export default props =>{


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

     
        return (
        <nav >
            <div className="nav__item__container">
                <ul className="nav__item__container__list"> 
                    <NavItem showNavModal={props.showNavModal} navModalState={props.navModalState} hideNavModal={props.hideNavModal} modalElement={modalElement} classe="navItem__vinhos" >Vinhos</NavItem>
                    <NavItem showNavModal={props.showNavModal} navModalState={props.navModalState} hideNavModal={props.hideNavModal} modalElement={modalElement} classe="navItem__acessorios" >Acessorios</NavItem>
                    <NavItem  classe="navItem__tendencias" > <Link to='/trendingDestaque#tendencias'>Tendências </Link></NavItem>
                    <NavItem showNavModal={props.showNavModal} navModalState={props.navModalState} hideNavModal={props.hideNavModal} modalElement={modalElement}  classe="navItem__categorias" >Categorias</NavItem>
                    <NavItem  classe="navItem__colecoes" >Coleções</NavItem>
                    <NavItem  classe="navItem__contato" >Contato</NavItem>
                    <NavItem  classe="navItem__sobre" >Sobre Nós</NavItem>
                </ul>
                <ul className="nav__item__container__list__icones">
                    <NavItem> <i className="fas fa-search"></i></NavItem>
                    <NavItem> <i className="fas fa-user"></i> </NavItem>
                    <NavItem> <i className="fas fa-shopping-cart"></i><p className="nav__item__container__list__icones__qtd">0</p></NavItem>
                </ul>
            </div>
        </nav>
    )
}
