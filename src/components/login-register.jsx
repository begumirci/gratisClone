import { useState } from 'react';
import Login from '../pages/login';
import Register from '../pages/register';

export default function LoginTwister() {
  const [isLogin, setIsLogin] = useState(true);

  function login() {
    setIsLogin(!isLogin);
  }
  return (
    <>
      <div className='container'>
        <div className='sides'>
          <div className={isLogin ? 'active' : ''} onClick={login}>
            <h3>Üye Girişi</h3>
          </div>
          <div className={isLogin ? '' : 'active'} onClick={login}>
            <h3>Üye Ol</h3>
          </div>
        </div>
        <div className='login-register'>
          {isLogin ? <Login /> : <Register />}
        </div>
      </div>
    </>
  );
}
