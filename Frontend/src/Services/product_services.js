import axiosInstance from '../axiosInstanse'

const product_endpoints = {
    allProducts: '/shop/products/'
}

export const allProducts = async()=>{
    const response = await axiosInstance.get(product_endpoints.allProducts)
    return response
}