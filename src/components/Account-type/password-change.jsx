import React from 'react'
import { useState } from 'react';

export default function PasswordChange() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

  return (
    <div className='container'>
        <div className='password-card'>
            <div className='password-container'>
                <div className='foryou'>
                    <img src="/public/sarisey.png" alt="" />
                    <h2>Şifrem</h2>
                </div>        
                <div className='container password-inputs'>
                  <div className='password-input'>
                     <p>Eski Şifre</p>
                      <input type={isVisible1 ? 'text' : 'password'} placeholder='Eski Şifre' name='password' required   />
                      <img className='eye-img' src={isVisible1 ? "/public/password-off.svg" : "/public/password-on.svg"} alt="" onClick={() => {setIsVisible1(!isVisible1)}} />
                  </div>
                  <div className='password-input'>
                      <p>Yeni Şifre</p>
                      <input type={isVisible2 ? 'text' : 'password'} placeholder='Yeni Şifre' name='password' required />
                      <img className='eye-img' src={isVisible2 ? "/public/password-off.svg" : "/public/password-on.svg"} alt="" onClick={() => { setIsVisible2(!isVisible2) }} />
                  </div>
                  <div className='password-input'>
                      <p>Yeni Şifre</p>
                      <input type={isVisible3 ? 'text' : 'password'} placeholder='Yeni Şifre' name='password' required />
                      <img className='eye-img' src={isVisible3 ? "/public/password-off.svg" : "/public/password-on.svg"} alt="" onClick={() => {setIsVisible3(!isVisible3) }} />
                  </div>
                      <button className='btn'>Kaydet</button>
                </div>
                
            </div>
        </div>

    </div>
  )
}
