import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../routes';
import { useState } from 'react';


function HeaderDrop({ isSignin, setSignin }) {
    async function signOut() {
        const { error } = await supabase.auth.signOut();
        setSignin(false);
    }
    return (
        <>
            <span></span>

            <ul className='drop-login-wrapper'>
                {
                    isSignin ? <>
                        <li className='drop-login border'><Link to='/myaccount'>Hesabım</Link></li>
                        <li><Link to='/myaccount'>Siparişlerim</Link></li>
                        <li><Link>Bildirimlerim</Link></li>
                        <li><Link>Ayarlarım</Link></li>
                        <li><Link>Favorilerim</Link></li>
                        <li onClick={signOut}><Link className='signOut'>Çıkış Yap</Link></li>
                    </> : <>
                        <li className='drop-login border'><Link to='/login'>Giriş Yap</Link></li>
                        <li className='drop-login'><Link to='/register'>Üye Ol</Link></li>
                        <li><Link to='/login'>Siparişlerim</Link></li>
                        <li><Link to='/login'>Bildirimlerim</Link></li>
                        <li><Link to='/login'>Ayarlarım</Link></li>
                        <li><Link to='/login'>Favorilerim</Link></li>
                    </>
                }
            </ul>
        </>
    )
}

export default function HeaderLogin() {
    const [isSignin, setSignin] = useState(false);
    const [user, setUser] = useState(null)
    useEffect(() => {
        const subscription = supabase.auth.onAuthStateChange((event, session) => {

            if (event === 'SIGNED_IN') {
                setUser(session?.user);
                setSignin(true);
            }
        });
    }, [isSignin]);



    return (
        <div className='header-login'>
            <div className='header-register-login'>
                <img src='/public/avatar.svg' alt="" />
                <div>
                    <span>{isSignin ? `${user?.user_metadata.name}` : 'Giriş Yap'}</span>
                    <span>{isSignin ? 'Hesabım' : 'Üye Ol'}</span>
                </div>
                <img src='/public/header-arrow.png' alt="" className='arrow-img' />
            </div>
            <div className='drop-position'>
                <HeaderDrop isSignin={isSignin} setSignin={setSignin} />
            </div>
        </div>
    )
}
