import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn : localStorage.getItem('authToken') ? true : false,
    user : JSON.stringify(localStorage.getItem('userData')) || null,
    loading : false,
    error : null
};


const loginSlice = createSlice(
    {
        name : 'auth',
        initialState,

        reducers:{

            loginStart: (state) => {
                state.loading = true;
                state.error = null;
            },

            loginSuccess: (state,action)=>{
                state.isLoggedIn = true,
                state.loading = false,
                state.user = action.payload
                state.error = null
                localStorage.setItem('userData', JSON.stringify(action.payload))
            },

            loginFail:(state,action)=>{
                state.loading = false;
                state.error = action.payload;
            },


            logout: (state)=>{
                state.isLoggedIn = false;
                state.user = null;
                localStorage.removeItem('authToken');
                localStorage.removeItem('userData');
                localStorage.removeItem('refreshToken');
            },


            updateProfile:(state, action)=>{
                state.user = {...state.user,...action.payload};
                localStorage.setItem('userData',JSON.stringify(state.user));
            }
        }
    }
);


export const{loginStart, loginSuccess, loginFail, logout, updateProfile} = loginSlice.actions;


export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;
export const selectLoading = (state) => state.auth.loading;

export default loginSlice.reducer;