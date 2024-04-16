import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../routes';

import avatar from '../../public/avatar.svg';
import anasayfa from '../../public/anasayfa.svg';
import arrow from '../../public/arrow.png';

export default function Filter({ setIsOpen }) {
  const [isSignin, setSignin] = useState(false);
  const [user, setUser] = useState(null);
  const [category, setCategories] = useState([]);

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    setSignin(false);
  }

  useEffect(() => {
    async function getCategories() {
      let { data: categories, error } = await supabase
        .from('categories')
        .select('*');
      setCategories(categories);
    }
    getCategories();
  }, []);

  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setUser(session?.user);
        setSignin(true);
      }
    });
  }, [isSignin]);

  const [isOpenCategory, setIsOpenCategory] = useState(true);

  function handleClose() {
    setIsOpen(false);
  }
  function handleCategory() {
    setIsOpenCategory(!isOpenCategory);
  }
  return (
    <>
      {isOpenCategory ? (
        <>
          <div className='drawer-header'>
            {isSignin ? (
              <div className='drawer-profile'>
                <img src='public/avatar.svg' alt='' />
                {user?.user_metadata.name} {user?.user_metadata.lastname}
              </div>
            ) : (
              <p>Hoşgeldiniz!</p>
            )}
            {isSignin ? (
              ''
            ) : (
              <Link to='/login' onClick={handleClose}>
                <button>
                  <img src='public/avatar.svg' alt='' />
                  <span>Giriş Yap veya Üye Ol</span>
                </button>
              </Link>
            )}
          </div>
          {isSignin ? (
            <div className='drawer-main'>
              <Link to='/' className='w-img' onClick={handleClose}>
                <img src='/anasayfa.svg' alt='' />
                <span>Anasayfa</span>
              </Link>
              <Link className='category' onClick={handleCategory}>
                <span>Kategoriler</span>
                <img src='/arrow.png' alt='' />
              </Link>
              <Link onClick={handleClose}>
                <span>Markalar</span>
              </Link>
              <Link onClick={handleClose}>Kampanyalar</Link>
              <Link
                to='/myaccount/myOrders'
                className='w-img'
                onClick={handleClose}
              >
                <img src='/cargo.png' alt='' />
                <span>Siparişlerim</span>
              </Link>
              <Link className='w-img' onClick={handleClose}>
                <img src='/gift-card.png' alt='' />
                <span>Hediye Kart</span>
              </Link>
              <Link className='w-img' onClick={handleClose}>
                <img src='/help-white.png' alt='' />
                <span>Yardım ve Destek</span>
              </Link>
              <Link onClick={signOut}>Çıkış Yap</Link>
            </div>
          ) : (
            <div className='drawer-main'>
              <Link to='/' className='w-img' onClick={handleClose}>
                <img src='/anasayfa.svg' alt='' />
                <span>Anasayfa</span>
              </Link>
              <Link className='category' onClick={handleCategory}>
                <span>Kategoriler</span>
                <img src='/arrow.png' alt='' />
              </Link>
              <Link onClick={handleClose}>
                <span>Markalar</span>
              </Link>
              <Link onClick={handleClose}>Kampanyalar</Link>
              <Link to='/login' className='w-img' onClick={handleClose}>
                <img src='/cargo.png' alt='' />
                <span>Siparişlerim</span>
              </Link>
              <Link className='w-img' onClick={handleClose}>
                <img src='/gift-card.png' alt='' />
                <span>Hediye Kart</span>
              </Link>
              <Link className='w-img' onClick={handleClose}>
                <img src='/help-white.png' alt='' />
                <span>Yardım ve Destek</span>
              </Link>
            </div>
          )}
        </>
      ) : (
        <>
          <div className='drawer-header'>
            <div onClick={handleCategory}>
              <img src='public/backarrow.png' alt='' />
              <p>Menü</p>
            </div>
          </div>
          <div className='drawer-main drawer-padding'>
            {category.map((x) => (
              <Link
                to={`/categories/${x.slug}`}
                onClick={handleClose}
                className='category'
              >
                <span>{x.name}</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}
