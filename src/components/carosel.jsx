import React, { useContext } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { contexim } from '../layouts/main-layout';



export default function Carosel() {

    const { allProducts } = useContext(contexim);
    const SomeProducts = allProducts.slice(0, 10);


    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 725,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <div className='container'>
            <div className="foryou">
                <img src='/public/sarisey.png' alt="" />
                <h2>Sizin İçin Seçtiklerimiz</h2>
            </div>
            <div className='carosel-cart'>

                <Slider {...settings}>
                    {
                        SomeProducts.map((x) => (
                            <Link to={`/categories/:category/${x.title}`} className="carosel-item" key={x.id}>
                                <img src={x.img_url} alt="" />
                                <h1>{x.title}</h1>
                                <div className='gradient'></div>
                                <h2>{x.price} <span>TL</span></h2>
                            </Link>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}


