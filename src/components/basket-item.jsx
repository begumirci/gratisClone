import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexim } from '../layouts/main-layout';


export default function BasketItem({ cart, removeCartItem, handleClick }) {

    const { totalPrice, totalProduct } = useContext(contexim);


    return (
        <div className='little-basket-cart'>
            {
                cart.map(x => (
                    <div className='little-basket-item' key={x.id}>
                        <img src={x.img_url} alt="" />
                        <div className='little-basket-item-info'>
                            <p>Ürün Kodu: {x.id}</p>
                            <h3>{x.title}</h3>
                            <div>
                                <h2>{x.price * x.amount}
                                    <p>TL</p>
                                </h2>
                                <p>{x.amount} Adet</p>
                            </div>
                        </div>
                        <small onClick={() => removeCartItem(x.product_id)}>x</small>
                    </div>
                ))
            }

            <div className='little-cart-total'>
                <div>
                    <p>{totalProduct} Ürün Fiyatı</p>
                    <h2>{totalPrice}<p>TL</p></h2>
                </div>
                <Link to='/basket'>
                    <button className='btn' onClick={handleClick}>Sepete Git</button>
                </Link>

            </div>
        </div>

    )
}
