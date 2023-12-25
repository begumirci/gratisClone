import React from 'react'
import { Link } from 'react-router-dom'

export default function BasketItem({ data }) {
    return (
        <div className='little-basket-cart'>
            
            <div className='little-basket-item'>
                <img src="/public/jel.png" alt="" />
                <div className='little-basket-item-info'>
                    <p>Ürün Kodu: 1234560</p>
                    <h3>hahahah</h3>
                    <div>
                        <h3>50<p>TL</p></h3>
                        <p>1 Adet</p>
                    </div>
                </div>
                <h1>x</h1>
            </div>
            
            <div className='little-cart-total'>
               <div>
                    <p>2 Ürün Fiyatı</p>
                    <p>50 TL</p>
                </div>
                <Link to='/basket'>
                    <button className='btn'>Sepete Git</button>
                </Link>
                
            </div>
        </div>

    )
}
