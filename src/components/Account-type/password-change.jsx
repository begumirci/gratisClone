import { useState } from 'react';
import { supabase } from '../../routes';
import sari from '../../../public/sarisey.png';
import passwordOn from '../../../public/password-on.svg';
import passwordOff from '../../../public/password-off.svg';

export default function PasswordChange() {
  const [isSignin, setSignin] = useState(false);
  const [userPassword, setUserPassword] = useState('');
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const subscription = supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      console.log('üye girişi var');
      setUserPassword(session?.user.user_metadata.password);
      setSignin(true);
    }
  });

  async function changePassword(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userPasswords = Object.fromEntries(formData);
    console.log(userPasswords);
    console.log(userPassword);

    if (userPassword == userPasswords.password1) {
      if (userPasswords.password2 == userPasswords.password3) {
        const { data } = await supabase.auth.updateUser({
          password: userPasswords.password2,
        });
        console.log(data);
        alert('Şifre Değişti');
      } else {
        alert('Girilen iki şifre aynı olmalıdır');
      }
    } else {
      alert('Lütfen şifrenizi doğru girdiğinizden emin olun');
    }
  }

  return (
    <div className='password-card'>
      <div className='password-container'>
        <div className='foryou'>
          <img src={sari} alt='' />
          <h2>Şifrem</h2>
        </div>
        <form onSubmit={changePassword}>
          <div className='container password-inputs'>
            <div className='password-input'>
              <p>Eski Şifre</p>
              <input
                type={isVisible1 ? 'text' : 'password'}
                placeholder='Eski Şifre'
                name='password1'
                required
              />
              <img
                className='eye-img'
                src={isVisible1 ? { passwordOff } : { passwordOn }}
                alt=''
                onClick={() => {
                  setIsVisible1(!isVisible1);
                }}
              />
            </div>
            <div className='password-input'>
              <p>Yeni Şifre</p>
              <input
                type={isVisible2 ? 'text' : 'password'}
                placeholder='Yeni Şifre'
                name='password2'
                required
              />
              <img
                className='eye-img'
                src={isVisible2 ? { passwordOff } : { passwordOn }}
                alt=''
                onClick={() => {
                  setIsVisible2(!isVisible2);
                }}
              />
            </div>
            <div className='password-input'>
              <p>Yeni Şifre</p>
              <input
                type={isVisible3 ? 'text' : 'password'}
                placeholder='Yeni Şifre'
                name='password3'
                required
              />
              <img
                className='eye-img'
                src={isVisible3 ? { passwordOff } : { passwordOn }}
                alt=''
                onClick={() => {
                  setIsVisible3(!isVisible3);
                }}
              />
            </div>
            <button className='btn' type='submit'>
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
