import React, { useState } from 'react'


export default function PasswordInput({handleChange, value}) {
    const [isVisible, setIsVisible] = useState(false);

    function showPassword(){
       setIsVisible(!isVisible);
    }
  return (
    <div className='relative'>
          <input type={isVisible ? 'text' : 'password' } placeholder='Şifre giriniz' name='password' required value={value} onChange={handleChange} />
          <img className='eye' src={isVisible ? "/public/password-off.svg" : "/public/password-on.svg"} alt="" onClick={showPassword} />
    </div>
  )
}
