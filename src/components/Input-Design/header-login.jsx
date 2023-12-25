import React from 'react'
import { Link } from 'react-router-dom'


function HeaderDrop() {
    return (
        <>
            <span></span>

            <ul className='drop-login-wrapper'>
                <li className='drop-login border'>
                    <Link to='/login'>Giriş Yap</Link>
                </li>
                <li className='drop-login'>
                    <Link to='/register'>Üye Ol</Link>
                </li>
                <li><Link to='/myaccount'>Siparişlerim</Link></li>
                <li><Link>Bildirimlerim</Link></li>
                <li><Link>Ayarlarım</Link></li>
                <li><Link>Favorilerim</Link></li>
            </ul>
        </>
    )
}

export default function HeaderLogin() {
    return (
        <div className='header-login'>
            <div className='header-register-login'>
                <img src='/public/avatar.svg' alt="" />
                <div>
                    <span>Giriş Yap</span>
                    <span>Üye Ol</span>
                </div>
                <img src='/public/header-arrow.png' alt="" className='arrow-img' />
            </div>
            <div className='drop-position'>
                <HeaderDrop />
            </div>
        </div>
    )
}
