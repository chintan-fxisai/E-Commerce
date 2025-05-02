
import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Accordian from '../../components/Breadcrumb/Breadcrumb'
import { Box, Grid, Typography } from '@mui/material'
import Filter from './Filter';
import Breadcrumb from './../../components/Breadcrumb/Breadcrumb'
import ShopItem from './ShopItem';
import './Shop.css'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { setSelectedProduct } from '../../redux/ProductDetailSlice';
import { allProducts } from '../../Services/product_services';
import PaginationComponent from '../../components/Pagination/PaginationComponent';


function Shop() {

  const categoryItem = ["Jacket", "Shoe", "Bag", "Scarf"]
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleProductClick(data){
    console.log("Clicked")
    dispatch(setSelectedProduct(data))
    navigate('/shop/'+ data.id)
  } 


  useEffect(() => {
    const fetch_data = async()=>{
      const response = await allProducts(currentPage);
      console.log("carrying data from page: ", currentPage)
      setProducts(response.data.results || [])
      setTotalPages(Math.ceil(response.data.count / 5));
        
      // console.log(response.data)
    } 
    fetch_data()
  }, [currentPage]);


  const handlePageChange = (page)=>{
    setCurrentPage(page)
  }



  return (
    
    <>
      <Breadcrumb pageName={"Shop"} />

      <Container maxWidth="lg" sx={{ py: 13 }} >
        <Grid container spacing={3} direction={'row'} >
          <Grid size={{ lg: 3 }}>

            <Filter categoryName={"CATEGORIES"} categoryItems={categoryItem} />
          </Grid>
          <Grid container size={{ lg: 9 }}>

            {products.map((data) => {
              return (
                <Grid size={{ lg: 4 }} key={data.id}>
                  <ShopItem
                    Image={`http://127.0.0.1:8000${data.image}`}
                    ItemName={data.name}
                    ItemPrice={data.price}
                    onClick={()=> handleProductClick(data)}
                  />
                </Grid>
              )
            })}

          </Grid>
        </Grid>

        <PaginationComponent
        currentPage ={currentPage}
        totalPages = {totalPages}
        onPageChange={handlePageChange}
        />
      </Container>
    </>
  )
}

export default Shop