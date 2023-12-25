import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PasswordInput from './Input-Design/password-input';

export default function Login() {
    const [isSubmit, setIsSubmit] = useState(false);

    function loginUser(e) {
        e.preventDefault();
        setIsSubmit(true);
    }
  return (
    <>
       <h4 className='login-header container'>Giriş Yap</h4>
    
        <form className='login-form' noValidate onSubmit={loginUser}>
            <div className={isSubmit ? 'submitted login-input' : 'login-input'}>
                <p>E-Posta</p>
                <input type="email" placeholder='E-Posta adresinizi giriniz' />
                <span>Bu alan zorunludur</span>
            </div>
            <div className={isSubmit ? 'submitted login-input' : 'login-input'}>
                <div className='login-password'>
                    <p>Şifre</p>
                    <Link className='forget-password'>Şifremi unuttum</Link>
                </div>
                <PasswordInput />
                <span>Bu alan zorunludur</span>
            </div>
            <button className='btn'>Giriş Yap</button>
        </form>
    </>
  )
}
