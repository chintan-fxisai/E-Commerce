import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Grid, Typography } from '@mui/material'


function HeroSlide() {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay:true,
        
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>

                {/* img 1 */}
                <div>
                    <Grid container direction="row"
                        sx={{
                            alignItems: 'center'
                        }}>
                        <Grid size={{ lg: 6 }} >
                            <Box className='hero-text'>

                                <Typography variant="body1" color="initial"
                                    sx={{
                                        fontSize: 14,
                                        color: '#dc3545',
                                        mb: 4,
                                        letterSpacing: '5px'
                                    }}>SUMMER COLLECTION</Typography>

                                <Typography variant="h1" color="initial"
                                    sx={{
                                        fontSize: '48px',
                                        mb: 4,
                                        fontWeight: 500
                                    }}>
                                    Fall-Winter <span>Collections-2030</span>
                                </Typography>

                                <Typography variant="body1" color="initial"
                                    sx={{
                                        fontSize: 18,
                                        mb: 4
                                    }}>
                                    A specialized branded cloths with outstanding fashion. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, voluptatibus?
                                </Typography>

                                <Button variant="contained" disableElevation
                                    sx={{
                                        bgcolor: "black",
                                        padding: "18px 30px",
                                        color: "white",
                                        borderRadius: 0,
                                        letterSpacing: '5px',
                                        fontSize: 14,
                                        fontWeight: 600
                                    }}>
                                    SHOP NOW
                                </Button>
                            </Box>
                        </Grid>
                        <Grid size={{ lg: 6 }}  justifyContent='end'>
                            <Box className='hero-img'>
                                <img src="/model1.jpg" alt="img" />
                            </Box>
                        </Grid>

                    </Grid>
                </div>

                {/* img 2 */}
                <div>
                    <Grid container direction="row"
                        sx={{
                            alignItems: 'center'
                        }}>
                        <Grid  size={{ lg: 6 }} >
                            <Box className='hero-text'>

                                <Typography variant="body1" color="initial"
                                    sx={{
                                        fontSize: 14,
                                        color: '#dc3545',
                                        mb: 4,
                                        letterSpacing: '5px'
                                    }}>SUMMER COLLECTION</Typography>

                                <Typography variant="h1" color="initial"
                                    sx={{
                                        fontSize: '48px',
                                        mb: 4,
                                        fontWeight: 500
                                    }}>
                                    Fall-Winter <span>Collections-2030</span>
                                </Typography>

                                <Typography variant="body1" color="initial"
                                    sx={{
                                        fontSize: 18,
                                        mb: 4
                                    }}>
                                    A specialized branded cloths with outstanding fashion. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, voluptatibus?
                                </Typography>

                                <Button variant="contained" disableElevation
                                    sx={{
                                        bgcolor: "black",
                                        padding: "18px 30px",
                                        color: "white",
                                        borderRadius: 0,
                                        letterSpacing: '5px',
                                        fontSize: 14,
                                        fontWeight: 600
                                    }}>
                                    SHOP NOW
                                </Button>
                            </Box>
                        </Grid>
                        <Grid  size={{ lg: 6 }}  justifyContent='end'>
                            <Box className='hero-img'>
                                <img src="/model3.jpg" alt="img" />
                            </Box>
                        </Grid>

                    </Grid>
                </div>

                {/* img 3 */}
                <div>
                    <Grid container direction="row"
                        sx={{
                            alignItems: 'center'
                        }}>
                        <Grid size={{ lg: 6 }} >
                            <Box className='hero-text'>

                                <Typography variant="body1" color="initial"
                                    sx={{
                                        fontSize: 14,
                                        color: '#dc3545',
                                        mb: 4,
                                        letterSpacing: '5px'
                                    }}>SUMMER COLLECTION</Typography>

                                <Typography variant="h1" color="initial"
                                    sx={{
                                        fontSize: '48px',
                                        mb: 4,
                                        fontWeight: 500
                                    }}>
                                    Fall-Winter <span>Collections-2030</span>
                                </Typography>

                                <Typography variant="body1" color="initial"
                                    sx={{
                                        fontSize: 18,
                                        mb: 4
                                    }}>
                                    A specialized branded cloths with outstanding fashion. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, voluptatibus?
                                </Typography>

                                <Button variant="contained" disableElevation
                                    sx={{
                                        bgcolor: "black",
                                        padding: "18px 30px",
                                        color: "white",
                                        borderRadius: 0,
                                        letterSpacing: '5px',
                                        fontSize: 14,
                                        fontWeight: 600
                                    }}>
                                    SHOP NOW
                                </Button>
                            </Box>
                        </Grid>
                        <Grid size={{ lg: 6 }}  justifyContent='end'>
                            <Box className='hero-img'>
                                <img src="/model2.jpg" alt="img" />
                            </Box>
                        </Grid>

                    </Grid>
                </div>

            </Slider>
        </div>
    )
}

export default HeroSlide