import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import MainLayout from "./layouts/main-layout";
import LoginTwister from "./components/login-register";
import Register from "./components/register";
import Basket from "./pages/basket";
import Product from "./components/Products/product";
import PasswordChange from "./components/Account-type/password-change";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import AccountLayout from "./layouts/account-layout";
import Order from "./components/Account-type/order";
import Admin from "./admin";
import Category, { loader as categoryLoader } from "./pages/category";
import { loader as productLoader } from "./components/Products/product";
import MyAccount from "./components/my-account";
import Likes from "./components/Account-type/likes";
import MyNotification from "./components/Account-type/notification";


const url = 'https://uucqqjkknlytpqxhhtwd.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1Y3Fxamtrbmx5dHBxeGhodHdkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzkzNzYwMSwiZXhwIjoyMDA5NTEzNjAxfQ.lwWdYJodSukSAqSrTvSzI_Ilpe4Un75JsFS-r9-YCWA';

export const supabase = createClient(url, key);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <LoginTwister />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/basket',
                element: <Basket />
            },
            {
                path: '/categories/:category',
                element: <Category />,
                loader: categoryLoader,
            },
            {
                path: '/categories/:category/:product',
                element: <Product />,
                loader: productLoader
            },
            {
                path: '/myaccount',
                element: <AccountLayout />,
                children: [
                    {
                        index: true,
                        path: '/myaccount/myOrders',
                        element: <Order />
                    },
                    {
                        path: '/myaccount/updatePassword',
                        element: <PasswordChange />
                    },
                    {
                        path: '/myaccount/myNotification',
                        element: <MyNotification />
                    },
                    {
                        path: '/myaccount/favorites',
                        element: <Likes />
                    }
                ]
            },

        ]
    },
    {
        path: '/admin',
        element: <Admin />
    }
]);
