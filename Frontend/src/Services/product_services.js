import axiosInstance from '../axiosInstanse'

const product_endpoints = {
    allProducts: '/shop/products/'
}

export const allProducts = async(page=1)=>{
    const response = await axiosInstance.get(`${product_endpoints.allProducts}?page=${page}`)
    console.log(response.data)
    return response
}