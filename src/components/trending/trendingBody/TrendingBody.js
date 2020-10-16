import React from  'react'

import './TrendingBody.css'

export default props => {

    let MOUSE_MOVIMENT = 0
    let DRAG_TOGGLE = false
    let BTN_CLICK_COUNTER = 0

    let TOUCH_START = 0
    let TOUCH_MOVIMENT = 0
    let TOUCH_END = 0

    const dragBegins = event => DRAG_TOGGLE = true

    const dragging = event =>{

        if (window.getSelection) {
            window.getSelection().removeAllRanges()
        }

        if(DRAG_TOGGLE){

            let valor = event.movementX
            if(MOUSE_MOVIMENT > -2600 ){
                
                MOUSE_MOVIMENT += valor
            }else{
                MOUSE_MOVIMENT = -2599
            }
            if(MOUSE_MOVIMENT > 5){
                MOUSE_MOVIMENT = 10
            }

            let div = document.querySelector('.trending__body__cards')
            div.style.left = MOUSE_MOVIMENT + 'px'
        }
    }

    const dragEnds = event => DRAG_TOGGLE = false

    const btnClickAddition = () =>{

        if(BTN_CLICK_COUNTER < 0){
            BTN_CLICK_COUNTER++

        }
        trendingBtnClicked()
    }
    const btnClickSubtraction = () =>{
        if(BTN_CLICK_COUNTER > -4){
            BTN_CLICK_COUNTER--
        }
        trendingBtnClicked()
    }

    const trendingBtnClicked = event =>{

        const div = document.querySelector('.trending__body__cards')
        const card = document.querySelector('.card')

        let cardWidth = card.clientWidth * BTN_CLICK_COUNTER
        div.style.left = cardWidth + 'px'

    }

    const touchBegins = event => {

        // const start = 
        TOUCH_START = event.changedTouches[0].clientX
    }

    const touching = event => {

        const touchMoviment =  (event.changedTouches[0].clientX - TOUCH_START)

        if(TOUCH_MOVIMENT >= -540){
            TOUCH_MOVIMENT = touchMoviment + TOUCH_END
        }
        if(TOUCH_MOVIMENT < -540){
            TOUCH_MOVIMENT = -540
        }
        if(TOUCH_MOVIMENT > 0){
            TOUCH_MOVIMENT = 0
        }



        let div = document.querySelector('.trending__body__cards')
        div.style.left = TOUCH_MOVIMENT + 'px'
    }

    const touchEnds = event => TOUCH_END = TOUCH_MOVIMENT

    return (

        <div className="trending__body">
            <div className="trending__body__cards" 
            onMouseDown={dragBegins} 
            onMouseMove={dragging} 
            onMouseUp={dragEnds}
            onTouchStart={touchBegins}
            onTouchMove={touching}
            onTouchEnd={touchEnds}>
            

                {props.children}
                
            </div>
            <div className="trending__body__buttons">

                <button className="trending__body__left" onClick={btnClickAddition} >&lt;</button>
                <button className="trending__body__right" onClick={btnClickSubtraction}>&gt;</button>

            </div>

        </div>

    )
}