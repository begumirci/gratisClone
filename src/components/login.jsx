import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PasswordInput from './Input-Design/password-input';
import { supabase } from '../routes.jsx';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [isVisible, setIsVisible] = useState(false);

    function showPassword() {
        setIsVisible(!isVisible);
    }
    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);

    async function loginUser(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData);
        console.log(user);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password,
        })
        if(error){
            console.log(error);
            alert('hata');
        }
        else{
            console.log(data);
            alert('Kullanıcı Başarıyla Giriş Yaptı');
            navigate('/');
        }
        setIsSubmit(true);
    }
  return (
    <>
       <h4 className='login-header container'>Giriş Yap</h4>
    
        <form className='login-form' noValidate onSubmit={loginUser}>
            <div className={isSubmit ? 'submitted login-input' : 'login-input'}>
                <p>E-Posta</p>
                <input type="email" placeholder='E-Posta adresinizi giriniz' name='email' />
                <span>Bu alan zorunludur</span>
            </div>
            <div className={isSubmit ? 'submitted login-input' : 'login-input'}>
                <div className='login-password'>
                    <p>Şifre</p>
                    <Link className='forget-password'>Şifremi unuttum</Link>
                </div>
                <div className='relative'>
                      <input type={isVisible ? 'text' : 'password'} placeholder='Şifre giriniz' name='password' required />
                      <img className='eye' src={isVisible ? "/public/password-off.svg" : "/public/password-on.svg"} alt="" onClick={showPassword} />
                 </div>
                <span>Bu alan zorunludur</span>
            </div>
            <button className='btn'>Giriş Yap</button>
        </form>
    </>
  )
}
