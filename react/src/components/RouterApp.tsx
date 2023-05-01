import React from "react";
import MainPage from "../pages/MainPage";
import AuthPage from "../pages/AuthPage";
import ProductsPage from "../pages/ProductsPage";
import AdminPage from "../pages/AdminPage";
import BasketPage from "../pages/BasketPage";
import RatesPage from "../pages/RatesPage";

interface IRoute {
    route: string,
    page: React.ReactNode
}

export const routes: Array<IRoute> = [
    {
        route: '/',
        page: <MainPage/>
    },
    {
        route: '/auth',
        page: <AuthPage/>
    },
    {
        route: '/products',
        page: <ProductsPage/>
    },
    {
        route: '/admin',
        page: <AdminPage/>
    },
    {
        route: '/basket',
        page: <BasketPage/>
    },
    {
        route: '/rates',
        page: <RatesPage/>
    }
]