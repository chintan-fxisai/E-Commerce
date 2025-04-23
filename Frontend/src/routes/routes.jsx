import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './publicRoute';
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

function routes() {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />

                <Route path="/login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>} />

                <Route path="/signup" element={
                    <PublicRoute>
                        <Signup />
                    </PublicRoute>} />

                <Route path="/reset-password" element={
                    <PublicRoute>
                        <Forgot />
                    </PublicRoute>
                } />

                <Route path="/reset-password/:uid/:token" element={
                    <PublicRoute>
                        <ResetPassword />
                    </PublicRoute>
                } />

                <Route path='/' element={
                        <PrivateRoute>
                            <Layout/>
                        </PrivateRoute>
                }>

                    <Route path='home' element={<Home/>}></Route>
                    <Route path='shop' element={<Shop/>}></Route>
                    {/* <Route path='pages' element={<Page/>}></Route> */}
                    <Route path='blog' element={<Blog/>}></Route>
                    <Route path='contact' element={<Contact/>}></Route>

                </Route>

            </Routes>
        </>
    );
}

export default routes;



