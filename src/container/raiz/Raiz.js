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
    }

    ShopByCategoryBtnCounter = 0


    componentDidMount(){

        this.showSubscribeEmailModal()

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
            <div className="raiz">
                <Header />
                <div className="Carousel__container" >
                    <Nav showNavModal={this.showNavModal} navModalState={this.state.navModalState} hideNavModal={this.hideNavModal}/>
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