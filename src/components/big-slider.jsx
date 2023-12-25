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
                    <img src="https://img.gratis.com/staticimages/egergergerg_0/8805532631090_1702021188982.jpg?v=907067704243663" alt="" />
                </div>
                <div className='slider-div'>
                    <img src="https://img.gratis.com/staticimages/dsvdsfvdfvdf_0/8805532303410_1702020676063.jpg?v=906554785231901" alt="" />
                </div >
                <div className='slider-div'>
                    <img src="https://img.gratis.com/staticimages/dsvdsfvdfvdf_0/8805532303410_1702020676063.jpg?v=906554785231901" alt="" />
                </div>
                <div className='slider-div'>
                    <img src="https://img.gratis.com/staticimages/dsvdsfvdfvdf_0/8805532303410_1702020676063.jpg?v=906554785231901" alt="" />
                </div>
                <div className='slider-div'>
                    <img src="https://img.gratis.com/staticimages/dsvdsfvdfvdf_0/8805532303410_1702020676063.jpg?v=906554785231901" alt="" />
                </div>
                <div className='slider-div'>
                    <img src="https://img.gratis.com/staticimages/dsvdsfvdfvdf_0/8805532303410_1702020676063.jpg?v=906554785231901" alt="" />
                </div>
            </Slider>
        </div>
    );
}
