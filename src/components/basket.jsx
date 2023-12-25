import React from 'react'
import { Link } from 'react-router-dom'

export default function Basket() {
    return (
        <>
            <div className='mobil-basket-border'>
                <div className='container'>
                    <div className='mobil-basket-header'>
                        <h1>Sepetim</h1>
                        <Link to='/'>
                            <img src='/public/left-arrow.png' alt="" />
                            <span>Alışverişe Devam Et</span>
                        </Link>
                    </div>
                    <div className='basket-items'>
                        <div className='basket-item'>
                            <div>
                                <img src='' alt="" />
                                <h3>Product Name</h3>
                                <div className='delete-like'>
                                    <button className="del-button"><svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button>
                                    <img src='/public/heart.png' alt="" style={{ width: '30px', height: '30px' }} />
                                </div>
                            </div>
                            <div>
                                <div className='decrease-increase'>
                                    <span className='increase'>+</span>
                                    <p>1</p>
                                    <span className='decrease'>-</span>
                                </div>
                                <h5>50 TL</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mobil-basket-total'>
                    <div className='container'>
                        <h5>Sipariş Özeti</h5>
                        <div>
                            <h4>Toplam</h4>
                            <h3>50 TL</h3>
                        </div>
                        <button>Satın Al <img src="/public/arrow.png" alt="" /></button>
                    </div>
                </div>
            </div>
        </>

    )
}
