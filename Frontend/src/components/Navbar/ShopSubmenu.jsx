import { Box } from '@mui/material'
import './Navbar.css'

export const ShopSubmenu = () => {

    const menudata = [
        { data: "New Arrivals", link: "" },
        { data: "Top Rates", link: "" },
        { data: "All Products", link: "" },

    ]

    return (
        <>
            <Box sx={{
                position: 'absolute',
                top: 50,
                boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
            }}  >
                <ul style={{
                    backgroundColor: 'white',
                    padding: 15,
                }}>
                    {menudata.map((item, index) => {
                        return (
                            <li className='shop-menu-item'
                                key={index}
                                style={{
                                    padding: 8,
                                    cursor: 'pointer',
                                    borderBottom: '1px solid lightgray',

                                }}>{item.data}</li>)
                    })

                    }
                </ul>
            </Box>
        </>
    )
}
