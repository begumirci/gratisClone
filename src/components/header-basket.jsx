import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BasketItem from './basket-item';
import { contexim } from '../layouts/main-layout';
import myBasket from '../../public/basket.png';
import basketHeader from '../../public/header-basket.svg';

export default function HeaderBasket() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeCartItem, totalProduct } = useContext(contexim);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Link className='header-action count-wrapper' to='#'>
        <img src={myBasket} alt='' onClick={handleClick} />
        <span>{totalProduct}</span>
        {isOpen && (
          <div className='basket'>
            <ul>
              {cart.length > 0 ? (
                <BasketItem
                  cart={cart}
                  removeCartItem={removeCartItem}
                  handleClick={handleClick}
                />
              ) : (
                <div className='emty-basket'>
                  <img src={basketHeader} alt='' />
                  <h4>Sepetiniz Boş</h4>
                </div>
              )}
            </ul>
          </div>
        )}
      </Link>
    </>
  );
}
