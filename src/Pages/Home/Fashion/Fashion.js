import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import './BuyerProduct.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

// import BuyerProductShow from './BuyerProductShow';
import {
    Box,
    Button,
    CardMedia,
    Container,
    Grid,
    Pagination,
    Paper,
    Rating,
    Stack,
    Typography,
  } from "@mui/material";
import { CartContext } from '../../../Context/CartContext';
const Fashion = () => {
    const [work, setWork] = useState([])

    const [cart, setCart] = useContext(CartContext);

    

    //     useEffect(()=>{
    //         Aos.init({duration:2000});
    //   },[])

    useEffect(() => {
        fetch('https://evening-chamber-61046.herokuapp.com/fashion')
            .then(res => res.json())
            // .then(data => setWork(data))
            .then(data=>{
            //   const sliceData=data.slice(0,8)
              setWork(data)
              console.log(data)
          })
    }, [])

  //   const like=[
  //     {type:ObjectId,ref:"user"}
  //  ]
    return (
        <Container>
        <h2 style={{textAlign:"left"}}>Fashion</h2>
        <Grid
          container
          spacing={2}
          sx={{ mt: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {work?.map((single) => (
            <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={4} md={3}>
              <Paper data-aos="fade-up"
                sx={{
                  p: 1,
                  margin: "auto",
                //   maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 40%)"
                }}
              >
                <Grid  container spacing={2} columns={{ xs: 4, sm: 8, md: 4 }}>
                  <Grid item xs={12} sm={12} md={12}>
                   <div className='photo'>
                    <div className='photoShops'>
                      <img height="170" width="250" style={{borderRadius:"15px"}} src={single?.img}></img>
                   
                    </div>
                   </div>
                   
                   
                  </Grid>

                  <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                    <Box style={{textAlign:"left"}}>
                      <h5 style={{fontWeight:"700"}}>Name : {single?.productName}</h5>

                     

                      {/* <ThumbUpIcon></ThumbUpIcon> */}
                       {/* <br></br> */}
                       {/* <h4>{single?.length}</h4> */}
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> price : TK.{single?.ProductPrice}</h5>
                        
                      </Typography>
                    
                     
                    </Box>
                  </Grid>
                </Grid>
             
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Stack spacing={2}>

          
        </Stack>
      </Container>
    );
};

export default Fashion;