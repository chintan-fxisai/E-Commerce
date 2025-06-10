import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup';
import Forgot from '../components/Forgot/Forgot';
import ResetPassword from '../components/Forgot/ResetPassword'
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import Blog from '../pages/Blog/Blog'
import Contact from '../pages/Contact/Contact'
import ProductDetail from '../pages/Shop/ProductDetail';
import Profile from '../pages/Profile/Profile'
import Cart from '../pages/Cart/Cart'

function routes() {
    return (
        <>
            <Routes>
                <Route path='/' element={
                    <Layout />
                }>
                    <Route index element={<Navigate to="/home" />}></Route>

                    {
                        /* or we can do this both are same */
                        // <Route index element={<Navigate to="/home" />}></Route>
                    }

                    <Route path='home' element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/shop/:id' element={<ProductDetail />} />
                    <Route path='blog' element={<Blog />} />
                    <Route path='contact' element={<Contact />} />

                    <Route path='profile' element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>} />

                    <Route path='cart' element={
                        <PrivateRoute>
                            <Cart />
                        </PrivateRoute>} />
                </Route>


                <Route path="/signup" element={

                    <Signup />
                } />

                <Route path="/reset-password" element={
                    <Forgot />
                } />


                <Route path="/reset-password/:uid/:token" element={
                    <ResetPassword />
                } />

            </Routes>
        </>
    );
}

export default routes;



