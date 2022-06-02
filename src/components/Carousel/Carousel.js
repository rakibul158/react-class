import React, { Component } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import './Carousel.scss';

class Carousel extends Component {
    render() {
        return (
            <OwlCarousel className="owl-theme" loop>
                <div className="item">
                    <img src="asset/img/01.jpg" alt='01'/>
                </div>
                <div className="item">
                    <img src="asset/img/02.jpg" alt='02'/>
                </div>
                <div className="item">
                    <img src="asset/img/03.jpg" alt='02'/>
                </div>
                <div className="item">
                    <img src="asset/img/04.jpg" alt='02'/>
                </div>
            </OwlCarousel>
        );
    }
}

export default Carousel;