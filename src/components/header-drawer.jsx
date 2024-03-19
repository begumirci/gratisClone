import { useState } from 'react';
import Filter from './filter';
import { Link } from 'react-router-dom';

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
              <img src='public/close.svg' alt='' onClick={handleDrawer} />
            </>
          ) : (
            <img src='public/menu.svg' alt='' onClick={handleDrawer} />
          )}
        </div>
        <Link to='/'>
          <img className='logo' src='public/logo.svg' alt='' />
        </Link>
        <Link className='campaign'>Kampanyalar</Link>
      </figure>
    </>
  );
}
