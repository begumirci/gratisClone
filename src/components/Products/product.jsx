import { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { supabase } from '../../routes';
import { contexim } from '../../layouts/main-layout';
import fullHeart from '../../public/dolukalp.png';
import emtyHeart from '../../public/heart.png';

export async function loader({ params }) {
  const { data: products, error } = await supabase
    .from('products')
    .select('id, title,price, description, category_id, brand_id, img_url')
    .eq('title', params.product);
  if (error) {
    console.log(error.message);
  } else {
    return { products: products };
  }
}

export default function Product() {
  const [count, setCount] = useState(1);
  const { addToCart, like, isLike } = useContext(contexim);
  const { products } = useLoaderData();

  const navigate = useNavigate();

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <>
      {products.map((x) => (
        <div className='product-flex' key={x.id}>
          <div className='product-hero'>
            <div className='container'>
              <div className='product'>
                <img className='product-img' src={x.img_url} alt='' />
                <div className='main-product'>
                  <h1>{x.title}</h1>
                  <span className='product-price'>
                    {x.price} <span>TL</span>
                  </span>
                  <div className='decrease-increas-like'>
                    <div className='decrease-increase'>
                      <span className='decrease' onClick={decrease}>
                        -
                      </span>
                      <p>{count}</p>
                      <span className='increase' onClick={increase}>
                        +
                      </span>
                    </div>
                    <img
                      src={isLike[x.id] ? { fullHeart } : { emtyHeart }}
                      alt=''
                      style={{ width: '30px', height: '30px' }}
                      onClick={() => like(x)}
                    />
                  </div>
                  <button className='btn' onClick={() => addToCart(x, count)}>
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='product-info'>
            <div className='container'>
              <h1>Ürün Özellikleri</h1>
              <p>{x.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
