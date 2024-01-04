import React, { useContext, useEffect, useState } from 'react'
import { contexim } from '../../layouts/main-layout'
import { supabase } from '../../routes';

export default function Order() {
  // const [orders, setOrders] = useState([]);
  const { isSignin, user } = useContext(contexim);
  const [mydata, setMyData] = useState([]);

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', options);
  }

  useEffect(() => {
    async function getOrders() {
      let { data, error } = await supabase
        .from('orders')
        .select('*')

      if (error) {
        console.log(error.message);
      } else {
        const updateOrders = data;
        if (isSignin) {
          const myOrders = updateOrders.filter(x => x.user_id == user.id);
          setMyData(myOrders);
        }
        else {
          setMyData([]);
        }
      }
    }
    getOrders();

  }, [user, isSignin]);


  return (
    <div className='order-card'>
      <div className='order-container'>
        <h1>Siparişlerim</h1>
        <div className='my-orders'>
          {mydata == 0 ? <>Siparişiniz Bulunmuyor</> :
            <>
              {
                mydata.map(x => (
                  <div className='my-order' key={x.id}>
                    <div className='order-img'>
                      <img src={x.img_url} alt="" />
                    </div>
                    <div>
                      <h6>Sipariş Tarihi</h6>
                      <span className='created'>{formatDate(x.created_at)}</span>
                    </div>
                    <div>
                      <h6 className='order-num'>Sipariş Numarası</h6>
                      <span>{x.id}</span>
                    </div>
                    <div>
                      <h6>Ürün Adı</h6>
                      <span>{x.title}</span>
                    </div>
                    <div>
                      <h6>Ürün Fiyatı</h6>
                      <span>{x.price} ₺</span>
                    </div>
                  </div>
                ))
              }

            </>}


        </div>
      </div>
    </div>
  )
}
