import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BasketItem from './basket-item';

export default function HeaderBasket() {
    const [isOpen, setIsOpen] = useState(false);
    const basketProducts = [
        {
            name: 'ruj',
            price: 250
        }
    ];

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Link className='header-action count-wrapper' onClick={handleClick}>
                <img src="/public/basket.png" alt="" />
                <span>0</span>

                {isOpen && (
                    <div className='basket'>
                        <ul>
                            {basketProducts.length > 0 ? (
                                <BasketItem data={basketProducts} />
                            ) : (
                                <div className='emty-basket'>
                                    <img src='/public/header-basket.svg' alt="" />
                                    <h4>Sepetiniz Boş</h4>
                                </div>
                            )}
                        </ul>
                    </div>
                )}
            </Link>

        </>
    )
}
