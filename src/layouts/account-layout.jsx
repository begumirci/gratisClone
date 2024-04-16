import MyAccount from '../components/my-account';
import { Outlet } from 'react-router-dom';

export default function AccountLayout() {
  return (
    <div className='container'>
      <div className='account-pages'>
        <div className='account-main'>
          <h1>Hesabım</h1>
          <MyAccount />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
