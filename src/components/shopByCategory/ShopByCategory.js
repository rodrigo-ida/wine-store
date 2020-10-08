import React from 'react'

import './ShopByCategory.css'

import CategoryCard from './categoryCards/CategoryCards'

export default props => {

    return (
        <div className="shop-category"> 
            <div className="shop-category__img"></div>
            <div className="shop-category__description">
                <h1>Escolha pela Categoria</h1>
                <h2 className="shop-category__fantasy-header">Categorias</h2>
                <div className="shop-category__description__categories">
                
                    <CategoryCard icon="fas fa-wine-glass-alt" description="Vinho Tinto " />
                    <CategoryCard icon="fas fa-glass-cheers" description="Vinho Seco  " />
                    <CategoryCard icon="fas fa-glass-martini-alt" description="Vinho Sobremesa " />
                    <CategoryCard icon="fas fa-glass-cheers" description="Vinho Francês" />
                    <CategoryCard icon="fas fa-glass-martini-alt" description="Vinho Espanhol" />
                    <CategoryCard icon="fas fa-cocktail" description="Vinho Italiano" />
                    <CategoryCard icon="fas fa-wine-glass" description="Vinho de Mesa" />
                    <CategoryCard icon="fas fa-wine-glass" description=" Promoções " />


                </div>
                <div className="shop-category__description__buttons">

                    <button className="shop-category__description__btn-left" onClick={props.btnHandler}> &lt;</button>
                    <button className="shop-category__description__btn-right" onClick={props.btnHandler}> &gt; </button>
                </div>
            </div>
        </div>
    )
}