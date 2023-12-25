import React from 'react'
import { Link } from 'react-router-dom'
import ProductLine from './product-line'

export default function ProductItems() {
  return (
    <div>
        <div className='container'>
          <ProductLine />
          <div className='product-items'>
            <Link to='/product' className="product-item">
                <img src='/public/jel.png' alt="" />
                <h1>Ruj</h1>
                <div className='gradient'></div>
                <h2>50 <span>TL</span></h2>
                <button className='btn'>Sepete Ekle</button>
            </Link>
        </div>
        </div>
    </div>
  )
}
