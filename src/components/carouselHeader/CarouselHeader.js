import React, {Component} from 'react'
import './CarouselHeader.css'

import CarouselPhoto from './carouselPhoto/CarouselPhoto'

class Carousel extends Component{

    state = {
        carouselImgCounter: 0,
        carouselActive: true
    }

    componentDidMount(){

         this.execucaoCarousel(4000)

    }

    carouselImgCounterDirection = ( forward = true) => {

        let carouselImgCounter = this.state.carouselImgCounter
        if(forward){

            if(carouselImgCounter === -2){
                carouselImgCounter = 0
            }else{
                carouselImgCounter--
            }
        }else{
            if(carouselImgCounter === 0){
                carouselImgCounter = -2
            }else{
                carouselImgCounter++
            }
        }
            
            this.setState({ carouselImgCounter: carouselImgCounter}, ()=> {this.carouselMoviment(this.state.carouselImgCounter)})
    }
    carouselMoviment = (counter) =>{
        const containerWidth = document.querySelector('.carouselHeader__fotoContainer').clientWidth/3
        const container = document.querySelector('.carouselHeader__fotoContainer')
        // let carouselImgCounter = this.state.carouselImgCounter
        container.style.left = containerWidth * counter + 'px'

    }

    execucaoCarousel = intervalo => setInterval(() => {if(this.state.carouselActive) this.carouselImgCounterDirection()},intervalo);

    btnsProperties = (opacity, padding, btnMoviment) =>{
        
        const buttons = document.querySelectorAll('.buttons')
        const leftButton = document.querySelector('.carouselHeader__left')
        const rightButton = document.querySelector('.carouselHeader__right')

        buttons.forEach(el => el.style.opacity = opacity + '%')
        buttons.forEach(el => el.style.padding = padding + 'px')
        leftButton.style.left = 15 - btnMoviment + '%'
        rightButton.style.left = 85 + btnMoviment + '%'

    }

    carouselMouseEnterHandler = () =>{

        let hover = this.state.carouselActive
        hover = !hover
        this.setState({ carouselActive: hover})

        this.btnsProperties(100, 20, 5)

    }

    carouselMouseLeaveHandler = () => {

        let hover = this.state.carouselActive
        hover = !hover
        this.setState({ carouselActive: hover})

        this.btnsProperties(0,0, -5)

    }


    leftBtnHandler = () => this.carouselImgCounterDirection(false)


    rightBtnHandler = () => this.carouselImgCounterDirection()

    
    render(){
        
        return (
            <div className='carouselHeader' onMouseEnter={this.carouselMouseEnterHandler} onMouseLeave={this.carouselMouseLeaveHandler}> 
                <div className="carouselHeader__fotoContainer"> 
                    <CarouselPhoto classPhoto={`carouselHeader__fotoContainer__foto1`}/>
                    <CarouselPhoto classPhoto={`carouselHeader__fotoContainer__foto2`}/>
                    <CarouselPhoto classPhoto={`carouselHeader__fotoContainer__foto3`}/>
                </div>

                <button className="carouselHeader__left  buttons" onClick={this.leftBtnHandler}><i className="fas fa-arrow-left"></i></button>
                <button className="carouselHeader__right buttons" onClick={this.rightBtnHandler}><i className="fas fa-arrow-right"></i></button>
            </div>
        )   
    }
}


export default Carousel