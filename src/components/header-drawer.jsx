import { useState } from 'react';
import Filter from './filter';
import { Link } from 'react-router-dom';
import close from '../../public/close.svg';
import menu from '../../public/menu.svg';
import logo from '../../public/logo.svg';

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  function handleDrawer() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <Filter setIsOpen={setIsOpen} />
      </div>
      <figure>
        <div className='drawer-menu'>
          {isOpen ? (
            <>
              <img src={close} alt='' onClick={handleDrawer} />
            </>
          ) : (
            <img src={menu} alt='' onClick={handleDrawer} />
          )}
        </div>
        <Link to='/'>
          <img className='logo' src={logo} alt='' />
        </Link>
        <Link className='campaign'>Kampanyalar</Link>
      </figure>
    </>
  );
}
