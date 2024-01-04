import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexim } from '../../layouts/main-layout';


export default function ProductItems() {

  const { addToCart, allProducts, search } = useContext(contexim);
  const SomeProducts = allProducts.slice(0, 16);

  const filteredProducts = SomeProducts.filter(product => product.title.toLocaleLowerCase('tr').includes(search.toLocaleLowerCase('tr')));


  return (
    <div className='container'>
      <div className='product-items' >
        {filteredProducts.map(x => (
          <div className="product-item" key={x.id}>
            <Link to={`/categories/:category/${x.title}`} >
              <img src={x.img_url} alt={x.title} />
              <h1>{x.title}</h1>
              <div className='gradient'></div>
              <h2>{x.price} <span>TL</span></h2>
            </Link>
            <button className='btn' onClick={() => addToCart(x)}>Sepete Ekle</button>

          </div>

        ))
        }
      </div>
    </div >
  )
}
