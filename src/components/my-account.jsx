import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import PasswordChange from './Account-type/password-change';
import { supabase } from '../routes';

export default function MyAccount() {
  const [show, setShow] = useState(false);

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    setSignin(false);
  }

  return (
    <>
      <div className='my-account-mobil'>
        <div className='my-account-drop'>
          <h5>Hesabım</h5>
          <img
            src='/public/header-arrow.png'
            onClick={() => {
              setShow(!show);
            }}
            alt=''
          />
        </div>
        {show ? (
          <div className='my-account-list'>
            <Link to='/myaccount/myOrders'>Siparişlerim</Link>
            <Link>Bildirimlerim</Link>
            <Link>Favorilerim</Link>
            <Link to='/myaccount/updatePassword'>Şifrem</Link>
            <Link>Hesap Bilgilerim</Link>
          </div>
        ) : (
          ''
        )}
        <div className='my-account-header'>
          <img src='public/avatar.svg' alt='' />
          <h1>Begüm Ircı</h1>
        </div>
      </div>

      <div className='my-account-main'>
        <div className='account-card-btns'>
          <div className='my-account-card'>
            <div className='my-account-header'>
              <img src='public/avatar.svg' alt='' />
              <h2>Begüm Ircı</h2>
            </div>
            <div className='my-account-list'>
              <ul>
                <li>
                  <Link to='/myaccount/myOrders'>Siparişlerim</Link>
                </li>
                <li>
                  <Link to='/myaccount/myNotification'>Bildirimlerim</Link>
                </li>
                <li>
                  <Link to='/myaccount/favorites'>Favorilerim</Link>
                </li>
              </ul>
              <ul>
                <h4>Ayarlarım</h4>
                <li>
                  <Link to='/myaccount/updatePassword'>Şifrem</Link>
                </li>
                <li>
                  <Link>Hesap Bilgilerim</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='account-btns'>
            <button className='btn'>Yardım ve Destek</button>
            <h3 onClick={signOut}>Güvenli Çıkış</h3>
          </div>
        </div>
      </div>
    </>
  );
}
