import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../routes'
import { useState } from 'react';
import { contexim } from '../../layouts/main-layout';

export default function Likes() {
    const { isSignin, user, myFav, setMyFav, like, isLike } = useContext(contexim);



    useEffect(() => {
        async function getFav() {
            let { data: favorites, error } = await supabase
                .from('favorites')
                .select('*')
            if (error) {
                console.log(error.message);
            } else {
                const updateFav = favorites;
                if (isSignin) {
                    const fav = updateFav.filter(x => x.user_id == user.id);
                    setMyFav(fav);
                }
            }


        }
        getFav();
    }, [isSignin, myFav, isLike]);

    return (
        <div className='order-card'>
            <div className='order-container'>
                <h1>Favorilerim</h1>
                <div className='my-orders'>
                    {myFav.length == 0 ? <>Favoriniz Bulunmuyor</> :
                        <>
                            {
                                myFav.map(x => (
                                    <div className='my-order' key={x.id}>
                                        <div className='order-img'>
                                            <img src={x.img_url} alt="" />
                                        </div>
                                        <div>
                                            <h6>Ürün Adı</h6>
                                            <span>{x.title}</span>
                                        </div>
                                        <div>
                                            <h6>Ürün Fiyatı</h6>
                                            <span>{x.price} ₺</span>
                                        </div>
                                        <span onClick={() => like(x)}>x</span>
                                    </div>
                                ))
                            }

                        </>}
                </div>
            </div>
        </div>
    )
}
