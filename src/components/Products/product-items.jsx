import React from 'react'
import { Link } from 'react-router-dom'
import products from "../../mocks/products.json";
import { slugify } from '../../helper';

export default function ProductItems() {
  return (
    <div>
      <div className='product-items' >
        {products.products.map(x => (
          <Link to={slugify(x.title)} className="product-item" key={x.id}>
            <img src={x.image} alt={x.title} />
            <h1>{x.title}</h1>
            <div className='gradient'></div>
            <h2>{x.price} <span>TL</span></h2>
            <button className='btn'>Sepete Ekle</button>
          </Link>
        ))
        }
      </div>
    </div >
  )
}
