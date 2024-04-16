import { useState } from 'react';
import passwordOn from '../../../public/password-on.svg';
import passwordOff from '../../../public/password-off.svg';
export default function PasswordInput({ handleChange, value }) {
  const [isVisible, setIsVisible] = useState(false);

  function showPassword() {
    setIsVisible(!isVisible);
  }
  return (
    <div className='relative'>
      <input
        type={isVisible ? 'text' : 'password'}
        placeholder='Şifre giriniz'
        name='password'
        required
        value={value}
        onChange={handleChange}
      />
      <img
        className='eye'
        src={isVisible ? { passwordOff } : { passwordOn }}
        alt=''
        onClick={showPassword}
      />
    </div>
  );
}
