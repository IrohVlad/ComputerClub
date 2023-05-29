import React from "react";
import { Navigate } from "react-router-dom";
import MainPage from "../../pages/mainPage/MainPage";
import AuthPage from "../../pages/authPage/components/AuthPage";
import ProductsPage from "../../pages/productPage/ProductsPage";
import AdminPage from "../../pages/adminPage/AdminPage";
import BasketPage from "../../pages/basketPage/BasketPage";
import RatesPage from "../../pages/ratesPage/RatesPage";

interface IRoute {
    route: string,
    page: React.ReactNode
}

export const routes: Array<IRoute> = [
    {
        route: '/', page: <MainPage/>
    },
    {
        route: '/auth', page: <AuthPage/>
    },
    {
        route: '*', page: <Navigate to='/'/>
    }
]
export const userRoutes: Array<IRoute> = [
    {
        route: '/', page: <MainPage/>
    },
    {
        route: '/products', page: <ProductsPage/>
    },
    {
        route: '/basket', page: <BasketPage/>
    },
    {
        route: '/rates', page: <RatesPage/>
    },
    {
        route: '*', page: <Navigate to='/'/>
    }
]
export const adminRoutes: Array<IRoute> = [
    {
        route: '/', page: <MainPage/>
    },
    {
        route: '/products', page: <ProductsPage/>
    },
    {
        route: '/admin', page: <AdminPage/>
    },
    {
        route: '/basket', page: <BasketPage/>
    },
    {
        route: '/rates', page: <RatesPage/>
    },
    {
        route: '*', page: <Navigate to='/'/>
    }
]