import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../routes';

import { contexim } from '../../layouts/main-layout';
import headerArrow from '../../../public/header-arrow.png';
import avatar from '../../../public/avatar.svg';

function HeaderDrop() {
  const { isSignin } = useContext(contexim);
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
  }
  return (
    <>
      <span></span>

      <ul className='drop-login-wrapper'>
        {isSignin ? (
          <>
            <li className='drop-login border'>
              <Link to='/myaccount/myOrders'>Hesabım</Link>
            </li>
            <li>
              <Link to='/myaccount/myOrders'>Siparişlerim</Link>
            </li>
            <li>
              <Link to='/myaccount/myNotification'>Bildirimlerim</Link>
            </li>
            <li>
              <Link>Ayarlarım</Link>
            </li>
            <li>
              <Link to='/myaccount/favorites'>Favorilerim</Link>
            </li>
            <li onClick={signOut}>
              <Link className='signOut'>Çıkış Yap</Link>
            </li>
          </>
        ) : (
          <>
            <li className='drop-login border'>
              <Link to='/login'>Giriş Yap</Link>
            </li>
            <li className='drop-login'>
              <Link to='/register'>Üye Ol</Link>
            </li>
            <li>
              <Link to='/login'>Siparişlerim</Link>
            </li>
            <li>
              <Link to='/login'>Bildirimlerim</Link>
            </li>
            <li>
              <Link to='/login'>Ayarlarım</Link>
            </li>
            <li>
              <Link to='/login'>Favorilerim</Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default function HeaderLogin() {
  const { isSignin, user } = useContext(contexim);
  return (
    <div className='header-login'>
      <div className='header-register-login'>
        <img src={avatar} alt='' />
        <div>
          <span>{isSignin ? `${user?.user_metadata.name}` : 'Giriş Yap'}</span>
          <span>{isSignin ? 'Hesabım' : 'Üye Ol'}</span>
        </div>
        <img src={headerArrow} alt='' className='arrow-img' />
      </div>
      <div className='drop-position'>
        <HeaderDrop isSignin={isSignin} />
      </div>
    </div>
  );
}
