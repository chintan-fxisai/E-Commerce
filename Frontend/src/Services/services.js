import axios from 'axios'
import axioInstance from '../axiosInstanse'

const Auth_endpoints = {
    getTodo: 'todo/getTodo/',
    createTodo : 'todo/createTodo/',
    deleteTodo : 'todo/deleteTodo/',
    updateTodo : 'todo/updateTodo/',
    userLogin : 'login/',
    userRegister: 'register/',
    userForgot : 'send-reset-password-email/',  
}


export const getTodo = async () =>{
    const response = await axioInstance.get(Auth_endpoints.getTodo)
    return response.data    
}

export const createTodo = async (payload)=>{
    const response = await axioInstance.post(Auth_endpoints.createTodo, payload)
    return response.data
}

export const deleteTodo = async (payload)=>{

    const response = await axioInstance.delete(Auth_endpoints.deleteTodo, { data: payload })
    return response.data
}

export const updateTodo = async (payload)=>{
    const response = await axioInstance.put(Auth_endpoints.updateTodo, payload)
    return response.data
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


