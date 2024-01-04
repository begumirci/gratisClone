import React, { createContext, useEffect, useState } from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import { useStickyState } from '../helper/local';
import { supabase } from '../routes';
import { useNavigate } from 'react-router-dom';


export const contexim = createContext();




export default function MainLayout() {
    const [cart, setCart] = useStickyState([], 'cartProducts');
    const [user, setUser] = useState(null);
    const [isSignin, setSignin] = useState(false);
    const [search, setSearch] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [isLike, setIsLike] = useStickyState({});
    const [myFav, setMyFav] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        async function getProducts() {
            let { data: products, error } = await supabase
                .from('products')
                .select('*');
            if (error) {
                console.log(error.message);
            } else {
                setAllProducts(products);
            }
        }
        getProducts();
    }, []);


    const totalPrice = cart.reduce((total, product) => total + (product.price * product.amount), 0);
    let totalProduct = 0;
    for (const a of cart) {
        totalProduct += a.amount;
    }

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session);
            if (event === 'INITIAL_SESSION' && session === null) {
                setUser(null);
                setSignin(false);
                return;
            }
            if (event === 'INITIAL_SESSION' && session !== null) {
                setUser(session?.user);
                setSignin(true);
                return;
            }
            if (event === 'SIGNED_IN') {
                setUser(session?.user);
                setSignin(true);
                return;
            }
            if (event === 'SIGNED_OUT') {
                setUser(null);
                setSignin(false);
                return;
            }
        });

    }, []);


    useEffect(() => {
        async function forUser() {
            let { data: basket, error } = await supabase
                .from('basket')
                .select('*');

            if (error) {
                console.log(error.message);
            } else {
                const updateCart = basket;
                if (isSignin) {
                    const specialCart = updateCart.filter(x => x.user_id == user.id);
                    setCart(specialCart);
                } else {
                    setCart([]);
                }
            }
        }
        forUser();
    }, [isSignin, cart]);

    async function order() {
        if (isSignin) {
            for (const a of cart) {
                const { data, error } = await supabase
                    .from('orders')
                    .insert([
                        {
                            user_id: user.id,
                            product_id: a.product_id,
                            title: a.title,
                            price: a.price,
                            img_url: a.img_url,
                            amount: a.amount
                        },
                    ])
                    .select();
                if (error) {
                    console.log(error.message);

                } else {
                    const { error } = await supabase
                        .from('basket')
                        .delete()
                        .eq('user_id', a.user_id)

                    if (error) {
                        console.log(error.message);
                    } else {
                        console.log('silindi');
                        setCart([]);
                    }
                }
            }
            alert('Başarıyla Sipariş Verildi!');
            navigate('/');
        } else {
            navigate('/login');
        }

    }
    async function addToCart(product, count = 1) {

        if (cart.find(x => x.id == product.id)) {
            const haveIndex = cart.findIndex(x => x.id === product.id);
            cart[haveIndex].amount += 1;

            if (isSignin) {
                const { data, error } = await supabase
                    .from('basket')
                    .update({ amount: cart[haveIndex].amount })
                    .eq('user_id', user.id)
                    .eq('product_id', product.product_id)
                    .select()

                if (error) {
                    console.log(error.message);
                }
            }

            setCart([...cart]);
            return;
        }

        if (cart.find(x => x.product_id == product.id)) {

            const haveIndex = cart.findIndex(x => x.product_id === product.id);
            cart[haveIndex].amount += 1;


            if (isSignin) {
                const { data, error } = await supabase
                    .from('basket')
                    .update({ amount: cart[haveIndex].amount })
                    .eq('user_id', user.id)
                    .eq('product_id', product.id)
                    .select()

                if (error) {
                    console.log(error.message);
                }
            }
            setCart([...cart]);
            return;
        } else {
            if (isSignin) {
                const { data, error } = await supabase
                    .from('basket')
                    .insert([
                        {
                            user_id: user.id,
                            product_id: product.id,
                            title: product.title,
                            price: product.price,
                            img_url: product.img_url,
                            amount: count
                        },
                    ])
                    .select();
                if (error) {
                    console.log(error.message);
                }
            }

            setCart([...cart, product]);
        }

    }

    async function removeCartItem(productId) {
        if (isSignin) {
            const { error } = await supabase
                .from('basket')
                .delete()
                .eq('user_id', user.id)
                .eq('product_id', productId);

            if (error) {
                console.log(productId);
                console.log(error.message);
            }
        }

        const updateCart = cart.filter(x => x.id !== productId);
        setCart(updateCart);
        console.log(updateCart);
        //sorarsın
        if ((updateCart.length - 1) === 0) {
            navigate('/');
        }
    }
    async function removeOneItem(productId) {
        console.log(productId);
        const cartIndex = cart.findIndex(x => x.id == productId);
        if (cartIndex !== -1) {
            const updateCart = [...cart];
            updateCart[cartIndex].amount -= 1;

            if (updateCart[cartIndex].amount <= 0) {
                updateCart.splice(cartIndex, 1);

                if (isSignin) {
                    const { error } = await supabase
                        .from('basket')
                        .delete()
                        .eq('user_id', user.id)
                        .eq('id', productId);
                    if (error) {
                        console.log(error.message);
                    }
                }
                return;
            }

            if (isSignin) {
                const { data, error } = await supabase
                    .from('basket')
                    .update({ amount: cart[cartIndex].amount })
                    .eq('user_id', user.id)
                    .eq('id', productId)
                    .select()

                if (error) {
                    console.log(error.message);
                }
            }
            setCart(updateCart);
        }
    }

    async function like(product) {
        console.log(product);
        setIsLike((prev) => {
            const updateLike = { ...prev };
            updateLike[product.id] = !prev[product.id];
            return updateLike;
        })


        if (isSignin) {
            if (isLike[product.id]) {

                const { error } = await supabase
                    .from('favorites')
                    .delete()
                    .eq('user_id', user.id)
                    .eq('id', product.id);
                if (error) {
                    console.log(error);
                }
            }
            if (!isLike[product.id]) {
                if (!myFav.find(x => x.id == product.id)) {
                    const { data, error } = await supabase
                        .from('favorites')
                        .insert([
                            {
                                user_id: user.id,
                                product_id: product.id,
                                title: product.title,
                                price: product.price,
                                img_url: product.img_url,
                            },
                        ])
                        .select();
                    if (error) {
                        console.log(error.message);
                    }
                }
            }
        }
    }

    return (
        <contexim.Provider value={{ addToCart, cart, removeCartItem, isSignin, user, totalPrice, totalProduct, setCart, order, allProducts, search, setSearch, removeOneItem, like, isLike, myFav, setMyFav }}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </contexim.Provider>
    )
}
