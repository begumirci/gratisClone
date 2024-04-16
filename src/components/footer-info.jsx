import { Link } from 'react-router-dom';

import shopping from '../../public/shopping.svg';
import help from '../../public/help.svg';
import kamyon from '../../public/kamyon.svg';
import iletisim from '../../public/iletisim.svg';

export function FooterMainInfo() {
  return (
    <div className='footer-bar'>
      <ul className='footer-bar-list'>
        <Link className='footer-bar-item'>
          <img src={shopping} alt='' />
          <span>Mağazalarımız</span>
          <span className='line'></span>
        </Link>
        <li className='footer-bar-item'>
          <img src={kamyon} alt='' />
          <a href='#'>Kolay İade</a>
          <span className='line'></span>
        </li>
        <li className='footer-bar-item'>
          <img src={help} alt='' />
          <a href='#'>Yardım ve Destek</a>
          <span className='line'></span>
        </li>
        <li className='footer-bar-item'>
          <img src={iletisim} alt='' />
          <a href='#'>İletişim</a>
        </li>
      </ul>
    </div>
  );
}

export default function FooterMobilInfo() {
  return (
    <>
      <div className='useful-bar-mobil'>
        <div className='useful-links container'>
          <div>
            <Link href='#'>
              <img src={shopping} alt='' />
              <span>Mağazalarımız</span>
            </Link>
            <Link href='#'>
              <img src={help} alt='' />
              <span>Yardım ve Destek</span>
            </Link>
          </div>
          <div>
            <Link href='#'>
              <img src={kamyon} alt='' />
              <span>Kolay İade</span>
            </Link>
            <Link href='#'>
              <img src={iletisim} alt='' />
              <span>İletişim</span>
            </Link>
          </div>
        </div>
      </div>
      <div className='useful-bar-main'>
        <div className='useful-links container'>
          <Link href='#'>
            <img src='public/shopping.svg' alt='' />
            <span>Mağazalarımız</span>
            <span className='line'></span>
          </Link>
          <Link href='#'>
            <img src={help} alt='' />
            <span>Yardım ve Destek</span>
            <span className='line'></span>
          </Link>
          <Link href='#'>
            <img src={kamyon} alt='' />
            <span>Kolay İade</span>
            <span className='line'></span>
          </Link>
          <Link href='#'>
            <img src={iletisim} alt='' />
            <span>İletişim</span>
          </Link>
        </div>
      </div>
    </>
  );
}
