import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function BigSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='big-slider'>
            <Slider {...settings}>
                <div className='slider-div'>
                    <img src="https://img.gratis.com/staticimages/fdbdfbdffdbdf_0/8806973734962_1704290302053.jpg?v=615405050684429" alt="" className='mobil-img' />
                    <img src="https://img.gratis.com/staticimages/regergerr_0/8806973702194_1704290255304.jpg?v=615358302734784" alt="" className='main-img' />
                </div>
                <div className='slider-div'>
                    <img src="https://img.gratis.com/staticimages/fdbdfbdffdbdf_0/8806973734962_1704290302053.jpg?v=615405050684429" alt="" className='mobil-img' />
                    <img src="https://img.gratis.com/staticimages/regergerr_0/8806973702194_1704290255304.jpg?v=615358302734784" alt="" className='main-img' />
                </div >
                <div className='slider-div'>
                    <img src="https://img.gratis.com/staticimages/fdbdfbdffdbdf_0/8806973734962_1704290302053.jpg?v=615405050684429" alt="" className='mobil-img' />
                    <img src="https://img.gratis.com/staticimages/regergerr_0/8806973702194_1704290255304.jpg?v=615358302734784" alt="" className='main-img' />
                </div>
            </Slider>
        </div>
    );
}
