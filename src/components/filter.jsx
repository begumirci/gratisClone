import React from 'react'
import { Link } from 'react-router-dom'
import { useState , useEffect} from 'react';
import { supabase } from '../routes';

const categories = [
    {
        id: 1,
        name: 'Cilt Bakım',
        subcategories: ['Cilt Temizleme Ürünleri', 'Nemlendiriciler', 'Göz Bakımı', 'El Bakımı'],
    },
    {
        id: 2,
        name: 'Makyaj',
        subcategories: ['Dudak Makyajı', 'Göz Makyajı', 'Makyaj Fırçaları'],
    },
    {
        id: 3,
        name: 'Saç Bakımı',
        subcategories: ['Şampuanlar', 'Saç Kremleri', 'Saç Boyaları'],
    },

];

function Category({key, name, subCategories}){
    const [isOpenSub, setIsOpenSub] = useState(false);
    
   return(
       <>
           <Link to="/" className='category' key={key} onClick={() => setIsOpenSub(!isOpenSub)}><span>{name}</span><span>{isOpenSub ? '-' : '+'}</span></Link>
           {
               isOpenSub ? <ul className='subcategory'>
                   {subCategories.map((a, index) => (
                       <li key={index}><Link to='/'><span>{a}</span></Link></li>
                   ))}
               </ul> : ''
           }
       </>
   )
}

export default function Filter({setIsOpen}) {
    const [isSignin, setSignin] = useState(false);
    const [user, setUser] = useState(null);

    async function signOut() {
        const { error } = await supabase.auth.signOut();
        setSignin(false);
    }

    useEffect(() => {
        const subscription = supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session);

            if (event === 'SIGNED_IN') {
                console.log('üye girişi var');
                setUser(session?.user);
                setSignin(true);
            }
        });
    }, [isSignin]);
    
    const [isOpenCategory, setIsOpenCategory] = useState(true);

    function handleClose(){
        setIsOpen(false);
    }
    function handleCategory(){
      setIsOpenCategory(!isOpenCategory);
    }
  return (
    <>
    {
        isOpenCategory ? <>
                  <div className='drawer-header'>
                    {isSignin ? <div className='drawer-profile'>
                    <img src="/public/avatar.svg" alt="" />
                     {user?.user_metadata.name} {user?.user_metadata.lastname}
                    </div> :  <p>Hoşgeldiniz!</p>}
                      {isSignin ? '' : 
                      <Link to='/login' onClick={handleClose}>
                          <button>
                              <img src="/public/avatar.svg" alt="" />
                              <span>Giriş Yap veya Üye Ol</span>
                          </button>
                      </Link> }
                  </div>
                  {isSignin ? 
                  <div className='drawer-main'>
                      <Link to='/' className='w-img' onClick={handleClose}><img src="/public/anasayfa.svg" alt="" /><span>Anasayfa</span></Link>
                      <Link className='category' onClick={handleCategory}><span>Kategoriler</span><img src="/public/arrow.png" alt="" /></Link>
                      <Link onClick={handleClose}><span>Markalar</span></Link>
                      <Link onClick={handleClose}>Kampanyalar</Link>
                      <Link className='w-img'><img src="/public/cargo.png" alt="" onClick={handleClose} /><span>Siparişlerim</span></Link>
                      <Link className='w-img'><img src="/public/gift-card.png" alt="" onClick={handleClose} /><span>Hediye Kart</span></Link>
                      <Link className='w-img'><img src="/public/help-white.png" alt="" onClick={handleClose} /><span>Yardım ve Destek</span></Link>
                      <Link onClick={signOut}>Çıkış Yap</Link>
                  </div> : 
                      <div className='drawer-main'>
                          <Link to='/' className='w-img' onClick={handleClose}><img src="/public/anasayfa.svg" alt="" /><span>Anasayfa</span></Link>
                          <Link className='category' onClick={handleCategory}><span>Kategoriler</span><img src="/public/arrow.png" alt="" /></Link>
                          <Link onClick={handleClose}><span>Markalar</span></Link>
                          <Link onClick={handleClose}>Kampanyalar</Link>
                          <Link to='/login' className='w-img' onClick={handleClose}><img src="/public/cargo.png" alt="" /><span>Siparişlerim</span></Link>
                          <Link className='w-img' onClick={handleClose}><img src="/public/gift-card.png" alt="" /><span>Hediye Kart</span></Link>
                          <Link className='w-img' onClick={handleClose}><img src="/public/help-white.png" alt="" /><span>Yardım ve Destek</span></Link>
                          
                      </div> }
                  
                  
        </> : <>
                      <div className='drawer-header'>
                        <div onClick={handleCategory}>
                            <img src="/public/backarrow.png" alt="" />
                            <p>Menü</p>
                        </div>
                      </div>
                      <div className='drawer-main drawer-padding'>
                          {
                              categories.map((x, index) => (
                                <Category key={index} name={x.name} subCategories={x.subcategories} />
                              ))
                          }
                      </div>

        </>
    }
      
            
    </>
  )
}
