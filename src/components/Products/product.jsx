import React from 'react'

export default function Product() {
  return ( 
   <div className='product-all'>
    <div className='container'>
      <div className='product'> 
        <img className='product-img' src="/public/jel.png" alt="" />
        <div className='main-product'>
          <h1>Ruj haankjndsd kslmflkmsdfs</h1>
          <span className='product-price'>50 <span>TL</span></span>
            <div className='decrease-increas-like'>
              <div className='decrease-increase'>
                <span className='increase'>+</span>
                <p>1</p>
                <span className='decrease'>-</span>
              </div>
              <img src='/public/heart.png' alt="" style={{ width: '30px', height: '30px' }} />
            </div>
            <button className='btn'>Sepete Ekle</button>
      </div>
      </div>
    </div>
    </div>
  
  )
}
