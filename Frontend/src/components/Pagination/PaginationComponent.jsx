import React from 'react'
import {Pagination, Box} from '@mui/material'

function PaginationComponent({currentPage, totalPages, onPageChange}) {

    const handlePageChange = (event, value)=>{
        onPageChange(value)
    }

  return (
    <>
    <Box
    sx={{
        display:'flex',
        justifyContent:'center',
        mt:4
    }}>
        <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color='primary'
        />
    </Box>
    </>
  )
}

export default PaginationComponent