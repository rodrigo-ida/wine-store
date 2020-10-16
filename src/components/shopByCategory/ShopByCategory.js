import React from 'react'

import './ShopByCategory.css'

import CategoryCard from './categoryCards/CategoryCards'

export default props => {



    let CATEGORY_TOUCH_START = 0
    let CATEGORY_TOUCH_MOVIMENT = 0
    let CATEGORY_TOUCH_END = 0

    const touchStart = event =>{

        CATEGORY_TOUCH_START = event.changedTouches[0].clientX
        console.log(CATEGORY_TOUCH_START);
    }
    
    const touchMoviment = event => {

        const div = document.querySelector('.shop-category__description__categories')

        const moviment = event.changedTouches[0].clientX 
        const startlessMoviment = moviment - CATEGORY_TOUCH_START
        
        console.log(CATEGORY_TOUCH_MOVIMENT);
        
        if(CATEGORY_TOUCH_MOVIMENT >= -360){
            CATEGORY_TOUCH_MOVIMENT = startlessMoviment + CATEGORY_TOUCH_END
        }
        if(CATEGORY_TOUCH_MOVIMENT < -360){
            CATEGORY_TOUCH_MOVIMENT = -360
        }
        if(CATEGORY_TOUCH_MOVIMENT > 0){
            CATEGORY_TOUCH_MOVIMENT = 0
        }

        div.style.left = CATEGORY_TOUCH_MOVIMENT + 'px'
    }

    const touchEnd = event =>{

        CATEGORY_TOUCH_END = CATEGORY_TOUCH_MOVIMENT


    }


    return (
        <div className="shop-category"> 
            <div className="shop-category__img"></div>
            <div className="shop-category__description">
                <h1 className="shop-category__header">Escolha pela Categoria</h1>
                <h2 className="shop-category__fantasy-header">Categorias</h2>
                <div className="shop-category__description__categories"
                onTouchStart={touchStart}
                onTouchMove={touchMoviment}
                onTouchEnd={touchEnd}

                >
                
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