import axioInstance from '../axiosInstanse'

const Auth_endpoints = {
    userLogin : 'login/',
    userRegister: 'register/',
    userForgot : 'send-reset-password-email/',  
}

export const userLogin = async(payload)=>{
    const response = await axioInstance.post(Auth_endpoints.userLogin, payload)
    return response
}
export const userForgot = async(payload)=>{
    const response = await axioInstance.post(Auth_endpoints.userForgot, payload)
    return response
}

export const userRegister = async(payload)=>{
    const response = await axioInstance.post(Auth_endpoints.userRegister, payload)
    return response.data
}

export const updateProfile = async (payload) => {
    const response = await axioInstance.put('profile/', payload);
    return response.data;
}

export const getProfile = async () => {
    const response = await axioInstance.get('profile/');
    return response.data;
}