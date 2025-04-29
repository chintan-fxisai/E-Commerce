
import React from 'react'
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


function Shop() {

  const categoryItem = ["Jacket", "Shoe", "Bag", "Scarf"]
  const data = [
    { "prod_id":"1",
      "img_src": "/product-1.jpg",
      "prod_name": "Shoes",
      "prod_price": "Rs. 750/-"
    },
    { "prod_id":"2",
      "img_src": "/product-2.jpg",
      "prod_name": "Shirts",
      "prod_price": "Rs. 750/-"
    },
    { "prod_id":"3",
      "img_src": "/product-3.jpg",
      "prod_name": "Shoes",
      "prod_price": "Rs. 750/-"
    },
    { "prod_id":"4",
      "img_src": "/product-4.jpg",
      "prod_name": "Jacket",
      "prod_price": "Rs. 750/-"
    },
    { "prod_id":"5",
      "img_src": "/product-5.jpg",
      "prod_name": "T-Shirt",
      "prod_price": "Rs. 750/-"
    },
    { "prod_id":"6",
      "img_src": "/product-6.jpg",
      "prod_name": "Scarf",
      "prod_price": "Rs. 750/-"
    },
    { "prod_id":"7",
      "img_src": "/product-7.jpg",
      "prod_name": "Bag",
      "prod_price": "Rs. 750/-"
    },
    { "prod_id":"8",
      "img_src": "/product-8.jpg",
      "prod_name": "Polo Tshirt",
      "prod_price": "Rs. 750/-"
    }
  ]

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleProductClick(data){
    console.log("Clicked")
    dispatch(setSelectedProduct(data))
    navigate('/shop/'+ data.prod_id)
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

            {data.map((data) => {
              return (
                <Grid size={{ lg: 4 }} key={data.prod_id}>
                  <ShopItem
                    Image={data.img_src}
                    ItemName={data.prod_name}
                    ItemPrice={data.prod_price}
                    onClick={()=> handleProductClick(data)}
                  />
                </Grid>
              )
            })}



          </Grid>
        </Grid>


      </Container>
    </>
  )
}

export default Shop