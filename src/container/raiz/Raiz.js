import React, {Component} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import './Raiz.css'
import Header from '../../components/header/Header'
import Nav from '../../components/nav/nav'
import Carousel from '../../components/carouselHeader/CarouselHeader'
import ScrollModal from '../../components/scrollModal/ScrollModal'
import Sales from '../../components/promocoes/Promocoes'
import OurNumbers from '../../components/ourNumbers/OurNumbers'
import Trending from '../../components/trending/Trending'
import TrendingDestaque from '../../components/trending/trendingDestaque/TrendingDestaque'
import TrendingNovidade from '../../components/trending/trendingNovidades/TrendingNovidades'
import TrendingMais from '../../components/trending/TrendingMais/TrendingMais'
import SpecialCollection from '../../components/specialCollection/SpecialCollection'
import ShopByCategory from '../../components/shopByCategory/ShopByCategory'
import Footer from '../../components/footer/footer'

class Raiz extends Component {

    state = {
        navModalState: false,
        subscribeModalState: false,
        responsivityActivation: false,
        navBurgerBtnState: false
    }

    ShopByCategoryBtnCounter = 0


    componentDidMount(){

        this.showSubscribeEmailModal()
        this.responsivityActivation()
        window.addEventListener('resize', this.responsivityActivation);

    }

    responsivityActivation = () => {



        const windowWidth = window.screen.width
        if(windowWidth < 900){
            this.setState({responsivityActivation: true}, ()=>console.log(this.state.responsivityActivation))
        }else{
            this.setState({responsivityActivation: false}
            )

        }
        console.log(windowWidth);
        console.log(this.state.responsivityActivation);
    }

    burgerButtonHandler = ()=>{

        const navBurgerBtnState = this.state.navBurgerBtnState
        this.setState({navBurgerBtnState: !navBurgerBtnState})
    }
    
    showNavModal = event => this.setState({navModalState: event.target.className})


    hideNavModal = () => this.setState({navModalState: false})

    screenOverflow = props =>{
        const body = document.querySelector('body')
        body.style.overflow = props

    }

    showSubscribeEmailModalFunctionListener = () =>{
        
        const raiz = document.querySelector('.header')
        const scrollValue = raiz.getBoundingClientRect().y
        if(scrollValue < -520 && scrollValue > -650){
            
            this.setState({ subscribeModalState: true})
            this.screenOverflow('hidden')
        }
    }

    showSubscribeEmailModal = () => document.addEventListener('scroll', this.showSubscribeEmailModalFunctionListener)

    
    hideSubscribeModal = () => {
        this.setState({ subscribeModalState: false})
        this.screenOverflow('visible')
        document.removeEventListener('scroll', this.showSubscribeEmailModalFunctionListener)
    }

    


    shopByCategoryBtnHandler = event =>{

        const container = document.querySelector('.shop-category__description__categories')

        const cardWidth = document.querySelector('.shop-category__description__card').clientWidth

        if(event.target.className === 'shop-category__description__btn-left' && this.ShopByCategoryBtnCounter < 0){
            this.ShopByCategoryBtnCounter += cardWidth
        }
        if(event.target.className === 'shop-category__description__btn-right' ){
            if(this.ShopByCategoryBtnCounter > -615){
                this.ShopByCategoryBtnCounter -= cardWidth
            }else{
                this.ShopByCategoryBtnCounter = 0
            }
        }

        container.style.left = this.ShopByCategoryBtnCounter + 'px'

    }


    
    render(){

        return(
            <div className="raiz" >
                <Header >
                    <Nav 
                        showNavModal={this.showNavModal} 
                        navModalState={this.state.navModalState} 
                        hideNavModal={this.hideNavModal}
                        responsivityActivation={this.state.responsivityActivation}
                        burgerButtonHandler={this.burgerButtonHandler}
                        navBurgerBtnState={this.state.navBurgerBtnState}
                    />
                </Header>
                <div className="Carousel__container" >
                    <Carousel />
                </div>
                <ScrollModal subscribeModalState={this.state.subscribeModalState} hideSubscribeModal={this.hideSubscribeModal}/>
                <div className="main">
                    <Sales />
                    <OurNumbers />
                    <Trending />
                    <Switch>
                        <Route path="/trendingDestaque"  exact > 

                            <TrendingDestaque 
                                btnHandler={this.trendingBtnClicked} 
                                dragged={this.trendingDrag} 
                            /> 
                        
                        </Route>

                        <Route path="/trendingNovidades" exact > 
                            <TrendingNovidade 
                               btnHandler={this.trendingBtnClicked} 
                                dragged={this.trendingDrag} 
                             /> 
                        </Route>

                        <Route path="/trendingMais" exact >

                            <TrendingMais 
                                btnHandler={this.trendingBtnClicked}
                                dragged={this.trendingDrag}
                            />
                        </Route>
                        <Redirect from="/" to="/trendingDestaque" />
                    </Switch>
                    <SpecialCollection />
                    <ShopByCategory btnHandler={this.shopByCategoryBtnHandler}/>
                    <Footer />
                </div>
            </div>
        )
    }


}

export default Raiz