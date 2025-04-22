import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoutes';
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup';
import Forgot from '../components/Forgot/Forgot';
import ResetPassword from '../components/Forgot/ResetPassword'
import Layout from '../components/Layout/Layout';

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
                <Route path="/home" element={
                    <PrivateRoute>
                        <Layout />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    );
}

export default routes;



