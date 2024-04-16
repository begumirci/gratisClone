import { Link } from 'react-router-dom';
import MenuDrawer from './header-drawer';
import HeaderBasket from './header-basket';
import HeaderLogin from './Input-Design/header-login';
import HeaderSearch from './Input-Design/header-search';
import HeaderNav from './header-nav';
import SearchInput from './search-input';
import bell from '../../public/bell.png';
import jel from '../../public/jel.png';
import headerGift from '../../public/header-gift.png';
import truck from '../../public/truck.png';
import headerHelp from '../../public/header-help.png';
import heart from '../../public/heart.png';

export default function Header() {
  return (
    <header>
      <div className='header'>
        <div className='container header-wrapper'>
          <div className='useful-info'>
            <img src={truck} alt='' />
            <p>Bu gerçek bir gratis sitesi değildir!</p>
          </div>

          <div className='header-links'>
            <Link>
              <img style={{ width: '30px', height: '30px' }} src={jel} alt='' />
              <span>Gratis Beauty</span>
            </Link>
            <Link>
              <img src={headerGift} alt='' />
              <span>Hediye Kart</span>
            </Link>
            <Link>
              <img src={headerHelp} alt='' />
              <span>Yardım ve Destek</span>
            </Link>
          </div>
        </div>
      </div>

      <div className='nav-wrapper'>
        <nav className='nav-menu container'>
          <MenuDrawer />
          <figure className='header-actions'>
            <HeaderSearch />
            <HeaderLogin />
            <Link>
              <img src={heart} alt='' />
            </Link>
            <HeaderBasket />
            <Link className='header-action count-bell'>
              <div className='bell'>
                <img src={bell} alt='' />
                <span>0</span>
              </div>
            </Link>
          </figure>
        </nav>
      </div>
      <div>
        <HeaderNav />
      </div>
      <SearchInput />
    </header>
  );
}
