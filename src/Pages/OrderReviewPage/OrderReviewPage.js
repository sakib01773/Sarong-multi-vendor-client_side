import { Box, Button, CardMedia, Container, Grid, Paper, Rating, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../../Components/Cart';
import { CartContext } from '../../Context/CartContext';


import Backdrop from '@mui/material/Backdrop';
import { useForm } from 'react-hook-form';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

// import Payment from '../Payment/Payment';
// import { Payment } from '@mui/icons-material';
import Header from "../../Shared/Header/Header"
import Footer from "../../Shared/Footer/Footer"
import './OrderReviewPage.css'
const OrderReviewPage = () => {
    // console.log(props)
    const { register, handleSubmit,reset } = useForm();
    // const [productName,buyerEmail]=props.booking
    const[date,setDate]=useState('');
    const[data,setData]=useState('');
    const handleonChange=e=>{
        setDate(e.target.value)
    }

    const title=date;

    // const valid={date}
    console.log({date})
    // const { productName, img, price ,text } = props.booking;
    // const [productName,buyerEmail]=props.booking
    const handleUpdate = (id) => {
       

        // fetch(`https://evening-chamber-61046.herokuapp.com/BlogStatusUpdate/${id}`, {
        //     method: "PUT",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify({ date }),
        // })
        //     .then((res) => res.json())
        //     .then((result) => console.log(result));
        // alert('update')
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



    const [cart, setCart] = useContext(CartContext);
    let navigate = useNavigate();


    const handleRemoveToCart = (id) => {
        const getDb = localStorage.getItem('productCart');
        const removeCartParse = JSON.parse(getDb);
        const newCart = removeCartParse.filter(product => product._id !== id);
        localStorage.setItem("productCart", JSON.stringify(newCart));
        setCart(() => newCart);
    }

    


    const handlePaymentGoToPage = () => {
        return navigate('/payment');
    }

    


    return (
       <div>
        <Header></Header>
         <Container>
        
        {/* <Box>
       {
          <PaymentFrom
          headline={title}></PaymentFrom>
       }
        </Box> */}
         
              
     
         
             {/* <h1>{productName}</h1> */}
             <br />
             <Grid container spacing={2} columns={{ xs: 12, sm: 6, md: 6 }}>
                 <Grid item xs={12} sm={3} md={3}>
                     {
                         cart.map(cart =>
                             <Box sx={{ pb: 3 }} key={cart._id} setData={cart.buyerEmail} >
                                 <Paper
                                     sx={{
                                         p: 1,
                                         margin: "auto",
                                         maxWidth: 500,
                                         flexGrow: 1,
                                         boxShadow: "0px 14px 22px rgb(42 135 158 / 60%)",
                                     }}
                                 >
                                     <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                                         <Grid item xs={2} sm={4} md={6}>
                                             <CardMedia
                                                 component="img"
                                                 sx={{ objectFit: "cover", height: 200, width: "auto" }}
                                                 alt="complex"
                                                 src={cart?.img}
                                             />
                                         </Grid>
                                         <Grid style={{textAlign:"left"}} item xs={2} sm={4} md={6} pl={2} my={3}>
                                             <Box style={{textAlign:""}}>
                                                 <Typography variant="h6"
                                                     sx={{ fontSize: '12px', fontWeight: 900 }}
                                                 >{cart?.bookName}</Typography>
 
 
                                                 <br />
 
                                                 <Typography variant="body" style={{ fontWeight: 700, fontSize:"20px" }}>
                                                     <span>  Product: </span>
                                                      {cart?.productName}
 
                                                 </Typography>
                                                 <br />
                                                 <Typography variant="body" style={{ fontWeight: 700 }}>
                                                     <span style={{ fontWeight: 700 }}> Price: </span>
                                                      {cart?.ProductPrice}
                                                 </Typography>
                                                 <br />
                                                 <Typography variant="body" style={{ fontWeight: 700 }}>
                                                     <span style={{ fontWeight: 700 }}> Quantity: </span>
                                                      {cart?.quantity}
                                                 </Typography>
                                                
                                             </Box>
 
 
                                             <Button
                                                 onClick={() => handleRemoveToCart(cart._id)}
                                                 color="error"
                                                 className='remove-design mt-2'
                                             >
                                                 Remove
                                             </Button>
                                         </Grid>
                                     </Grid>
                                 </Paper>
                             </Box>
                         )
                     }
                 </Grid>
 
 
                 <Grid item xs={12} sm={3} md={3}>
               
                     <Cart>
                      
                         <Button className='orders-design' style={{textAlign:"left"}} onClick={handlePaymentGoToPage} sx={{ width: 1 }}>Order Now</Button>
                     </Cart>
                     {/* <h2>Schedule Purchase</h2> */}
 
                     {/* scehedule */}
 
                     {/* <Button onClick={handleOpen}>Open modal</Button> */}
      
 
                     {/* <!-- Button trigger modal --> */}
 
 {/* <!-- Modal --> */}
 
 
                      {/* <Link>Month</Link> */}
 
                 </Grid>
               
             </Grid>
 
             
  
             {/* schedule  */}
           
         </Container>
         <Footer></Footer>
       </div>
    );
};

export default OrderReviewPage;