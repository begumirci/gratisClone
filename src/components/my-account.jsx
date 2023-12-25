import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import PasswordChange from './Account-type/password-change';


export default function MyAccount() {
    const [show, setShow] = useState(false);

    return (
        <div className='container'>

            <div className='my-account-mobil'>
                <div className='my-account-drop'>
                    <h5>Hesabım</h5>
                    <img src="/public/header-arrow.png" onClick={() => { setShow(!show) }} alt="" />
                </div>
                {
                    show ? <div className='my-account-list'>
                        <Link>Siparişlerim</Link>
                        <Link>Bildirimlerim</Link>
                        <Link>Favorilerim</Link>
                        <Link to='/updatePassword'>Şifrem</Link>
                        <Link>Hesap Bilgilerim</Link>
                    </div> : ''
                }
                <div className='my-account-header'>
                    <img src="/public/avatar.svg" alt="" />
                    <h1>Begüm Ircı</h1>
                </div>
                <div>
                  Siparişlerim
                </div>
            </div>

            <div className='my-account-main'>
                <div className='account-flex'>
                    <h1>Hesabım</h1>
                    <div className='my-account-card'>
                        <div className='my-account-header'>
                            <img src="/public/avatar.svg" alt="" />
                            <h2>Begüm Ircı</h2>
                        </div>
                        <div className='my-account-list'>
                            <ul>
                                <li><Link>Siparişlerim</Link></li>
                                <li><Link>Bildirimlerim</Link></li>
                                <li><Link>Favorilerim</Link></li>
                            </ul>
                            <ul>
                                <h4>Ayarlarım</h4>
                                <li><Link to='/updatePassword'>Şifrem</Link></li>
                                <li><Link>Hesap Bilgilerim</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='account-btns'>
                        <button className='btn'>Yardım ve Destek</button>
                        <h3>Güvenli Çıkış</h3>
                    </div>
                </div>
                <div>
                    Siparişlerim
                </div>

            </div>
        </div>
    )
}
