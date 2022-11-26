import React from 'react';
import { Typography, Box } from '@mui/material';
// import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import Marquee from "react-fast-marquee";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Visit = () => {
    return (
        <Box sx={{ bgcolor: '#7E2231' }}>
            <Marquee direction='right'>
                <AddShoppingCartIcon sx={{ color: 'white' }} />
                <Typography> <a style={{ textDecoration: "none", color: 'white', fontWeight: 'bold' }} href="https://docs.google.com/forms/d/e/1FAIpQLSfvFQyfZbgWwUW8GE8tM1vCa3-44nj1GlDtVRmoM1aaWlediA/viewform"
                >  Thank You Visit Our Website  </a></Typography>
                <AddShoppingCartIcon sx={{ color: 'white' }} />
            </Marquee>


        </Box>
    );
};

export default Visit;