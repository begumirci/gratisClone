import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const list = [
    {
        img: 'https://img.gratis.com/mnpadding/300/300/ffffff/h92/h16/9307426357278/10864312_01.jpg',
        title: 'Lorael Paris Maybelline New York Avantaj Paketi',
        price: 899
    },
    {
        img: 'https://img.gratis.com/mnpadding/300/300/ffffff/hff/h00/9303284351006/10864313_01.jpg',
        title: 'Urban Care Bond Plex Avantaj Paketi',
        price: 399
    },
    {
        img: 'https://img.gratis.com/mnpadding/300/300/ffffff/hc6/h63/9303285137438/10867353_01.jpg',
        title: 'Neutrogena Cilt Bakım Avantaj Paketi',
        price: 834
    },
    {
        img: 'https://img.gratis.com/mnpadding/300/300/ffffff/h28/h9f/9304204017694/10101312_01.jpg',
        title: 'Beaulis Makyaj Avantaj Paketi',
        price: 324
    },
    {
        img: 'https://img.gratis.com/mnpadding/300/300/ffffff/h3f/h42/9304201920542/10094697_01.jpg',
        title: 'Nivea Cilt Bakımı Avantaj Paketi',
        price: 199
    },
    {
        img: 'https://img.gratis.com/mnpadding/300/300/ffffff/h70/hfa/9304203493406/10101310_01.jpg',
        title: 'Lykd Makyaj Avantaj Paketi',
        price: 324
    },
    {
        img: 'https://img.gratis.com/mnpadding/300/300/ffffff/hb3/hc4/9303282778142/10753464_01.jpg',
        title: 'Dove Deodorant Emotion Parfüm ',
        price: 159
    },
    {
        img: 'https://img.gratis.com/mnpadding/300/300/ffffff/h58/h69/9303283302430/10753467_01.jpg',
        title: 'Benri Avantaj Paketi',
        price: 200
    },
    {
        img: 'https://img.gratis.com/mnpadding/300/300/ffffff/h4c/h12/9303284875294/10867352_01.jpg',
        title: 'Petite Maison Cilt Bakım Avantaj Paketi',
        price: 300
    },
]

export default function Carosel() {

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
                        list.map((x, i) => (
                            <Link className="carosel-item" key={i}>
                                <img src='/public/jel.png' alt="" />
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


