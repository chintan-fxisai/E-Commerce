import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoutes';
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup';
import Todo from '../components/Todo/todo'
import Forgot from '../components/Forgot/Forgot';
import ResetPassword from '../components/Forgot/ResetPassword'

function routes() {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />

                <Route path="/todo" element={
                    <PrivateRoute>
                        <Todo />
                    </PrivateRoute>
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

                <Route path='/test' element={<Todo />} />
            </Routes>
        </>
    );
}

export default routes;



