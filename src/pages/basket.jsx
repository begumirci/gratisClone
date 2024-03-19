import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexim } from '../layouts/main-layout';

export default function Basket() {
  const {
    cart,
    removeCartItem,
    totalPrice,
    isSignin,
    order,
    removeOneItem,
    addToCart,
    isLike,
  } = useContext(contexim);
  return (
    <div className='mobil-basket-border'>
      <div className='container'>
        <div className='main-flex'>
          <div>
            <div className='mobil-basket-header'>
              <h1>Sepetim</h1>
              <Link to='/'>
                <img src='public/left-arrow.png' alt='' />
                <span>Alışverişe Devam Et</span>
              </Link>
            </div>
            <div className='basket-items'>
              {cart.map((x) => (
                <div className='basket-item' key={x.id}>
                  <div>
                    <Link to={`/categories/:category/${x.title}`}>
                      <img src={x.img_url} alt='' />
                    </Link>
                    <Link to={`/categories/:category/${x.title}`}>
                      <h3>{x.title}</h3>
                    </Link>
                    <div className='delete-like'>
                      <button
                        className='del-button'
                        onClick={() => removeCartItem(x.product_id)}
                      >
                        <svg viewBox='0 0 448 512' className='svgIcon'>
                          <path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'></path>
                        </svg>
                      </button>
                      <img
                        src={
                          isLike[x.product_id]
                            ? 'public/dolukalp.png'
                            : 'public/heart.png'
                        }
                        alt=''
                        style={{ width: '30px', height: '30px' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className='decrease-increase'>
                      <span
                        className='decrease'
                        onClick={() => removeOneItem(x.id)}
                      >
                        -
                      </span>
                      <p>{x.amount}</p>
                      <span className='increase' onClick={() => addToCart(x)}>
                        +
                      </span>
                    </div>
                    <h2>
                      {x.price * x.amount}
                      <span>TL</span>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mobil-basket-total'>
            <h5>Sipariş Özeti</h5>
            <div className='total-side'>
              <h4>Toplam</h4>
              <h2>
                {totalPrice}
                <span>TL</span>
              </h2>
            </div>
            <Link to={isSignin ? '/' : '/login'}>
              <button onClick={order}>
                Satın Al
                <img src='public/arrow.png' alt='' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
