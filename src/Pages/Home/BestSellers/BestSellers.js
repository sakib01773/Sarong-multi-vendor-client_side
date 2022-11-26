// import React from 'react';
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Avatar, Box, Container, Rating, Typography , Paper} from "@mui/material";
import "./BestSellers.css";

// import required modules
import { FreeMode, Pagination,Autoplay } from "swiper";

const BestSellers = () => {
//  const {user}=useAuth()
//   const [review,setReview]=useState([])
//   useEffect(()=>{
//     fetch('https://evening-chamber-61046.herokuapp.com/features')
//     .then(res=>res.json())
//     .then(data=>setReview(data))
//   },[])
  return (
    <div className="container">
        <h2 className="features">Best Sellers</h2>
     <div data-aos="fade-up" className="row">
      <div className="">
      <Swiper
         className="mySwiper"
         slidesPerView={3}
        //  spaceBetween={30}
         freeMode={true}
         // pagination={{
         //   clickable: true,
         // }}
         autoplay={{
           delay: 2000
         }}
        
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              }
          }}
       
         
         
        
         modules={[FreeMode, Pagination,Autoplay]}
        
       
       
       >



  

  
        
      
 
         
 
         
 
 
 
         <>
          {/* {
           review.map((reviews)=>( */}

             <Box>
            

             <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-4" height="80" width="110" style={{borderRadius:""}}
                src=' https://storage.googleapis.com/monarchmart-storage/uploads/all/r6J2Qu0H2Nq2JY53XEI8jqwxGsBnJKo9B5lKvuQO.jpg '
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a  href='/topShop' className="visits"  style={{background:"", color:"black"}}>Top Up</a>
            
            <br></br>
            
            <a  style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/topShop' className="visitShop mt-2">Visit</a></a>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>



          
           
             {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
             </Box>



             {/* 2nd  */}


             <Box>
            

            <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-4" height="80" width="110" style={{borderRadius:""}}
                src=' https://storage.googleapis.com/monarchmart-storage/uploads/all/avQE6lrGU0wOGm626aTkgg4uHRCub6Za0Dhk0VYx.jpg '
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a  href='/powerShop' className="visits"  style={{background:"", color:"black"}}>Power</a>
            
            <br></br>
            
            <a style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/powerShop' className="visitShop">Visit</a></a>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>


                         {/* 3rd  */}


                         <Box>
            

                         <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-4" height="80" width="110" style={{borderRadius:""}}
                src='https://storage.googleapis.com/monarchmart-storage/uploads/all/HtA2xOlGhh139GXynxa6RuvH8EAZXS6NL94rJNKf.jpg '
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a  href='/expertShop' className="visits"  style={{background:"", color:"black"}}>Expert</a>
            
            <br></br>
            
            <a style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/expertShop' className="visitShop">Visit</a></a>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>



                         {/* 4th  */}


                         <Box>
            

            <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img height="140" width="110" style={{borderRadius:""}}
                src='https://storage.googleapis.com/monarchmart-storage/uploads/all/L08qfQvzkmjys8mLnw76ZTyvqhrGM0nJWKE9VNd0.jpg'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/rajShop' className="visits" style={{background:"", color:"black"}}>RajKonna</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/rajShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>



                         {/* 5th  */}


                         <Box>
            

            <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-3" height="90" width="110" style={{borderRadius:""}}
                src='https://monarchmart.com/uploads/all/Ol5SclwbgX1ziihhK3rnxLSJdPzr0BrnCXpqaDhP.jpg'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/redvioletShop' className="visits" style={{background:"", color:"black"}}>Redviolet</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/redvioletShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>


                         {/* 6th  */}

                         <Box>
            

                         <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-3" height="80" width="110" style={{borderRadius:""}}
                src='https://monarchmart.com/uploads/all/AzmG4jmLq0Egc1e1yL1MurJt8P5Cx7PK59AOcYje.jpg'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/brother' className="visits" style={{background:"", color:"black"}}>Brothers</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/brother' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>
           {/* )) */}
          {/* } */}
         </>
      
       </Swiper>



       {/* start  */}

       <Swiper
         className="mySwiper"
         style={{marginTop:"-130px"}}
         slidesPerView={3}
        //  spaceBetween={30}
         freeMode={true}
         // pagination={{
         //   clickable: true,
         // }}
         autoplay={{
           delay: 2000
         }}
        
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              }
          }}
       
         
         
        
         modules={[FreeMode, Pagination,Autoplay]}
        
       
       
       >



  

  
        
      
 
         
 
         
 
 
 
         <>
          {/* {
           review.map((reviews)=>( */}

             <Box>
            

             <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-3" height="120" width="110" style={{borderRadius:""}}
                src='https://monarchmart.com/uploads/all/Mz8HGE1s4NSeVAZcIaykqekDXY3LI0IaYeG3S7Ie.png'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/redvioletShop' className="visits" style={{background:"", color:"black"}}>Skmei</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/redvioletShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>



          
           
             {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
             </Box>



             {/* 2nd  */}


             <Box>
            

             <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-3" height="120" width="110" style={{borderRadius:""}}
                src='https://monarchmart.com/uploads/all/BYSnRdnTYnmlaQFOWy4DznrR4KHZlkHlYLnmykyv.png'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/expertShop' className="visits" style={{background:"", color:"black"}}>DeshiShop</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/expertShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>


                         {/* 3rd  */}


                         <Box>
            

                         <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-3" height="120" width="110" style={{borderRadius:""}}
                src='https://monarchmart.com/uploads/all/L5kLubP078w7iJieDKKMdnIuvZSoQDAZrTaVl8Nw.png'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/PowerShop' className="visits" style={{background:"", color:"black"}}>Zabeenbd</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/PowerShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>



                         {/* 4th  */}


                         <Box>
            

                         <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-4" height="80" width="110" style={{borderRadius:""}}
                src='https://monarchmart.com/uploads/all/QjkFqDMZTmXhIcpAgQKv7LvVugSvIMvUNJggLEAu.jpg'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/topShop' className="visits" style={{background:"", color:"black"}}>Hobby</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/topShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>



                         {/* 5th  */}


                         <Box>
            

                         <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="mt-4" height="90" width="110" style={{borderRadius:""}}
                src='https://monarchmart.com/uploads/all/c9WIvBseK1cjauOYofu04NPZhnsCJxzKCRdBLKc6.jpg'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/rajShop' className="visits" style={{background:"", color:"black"}}>L4Fashion</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/rajShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>


                         {/* 6th  */}

                         <Box>
            

                         <SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  
            
            {/* <Paper
                            sx={{
                              p: 1,
                              margin: "auto",
                            //   maxWidth: 400,
                              flexGrow: 1,
                              boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                            }}
                          > */}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width:"200px" }}>
             
             <Box sx={{ display: "flex", justifyContent: "center" }}>
               <img className="" height="150" width="110" style={{borderRadius:""}}
                src='https://monarchmart.com/uploads/all/TqO70AeAHPErgfXb6oxTRxaGO3xjyH2n0JT9LbYQ.jpg'
                 sx={{
                   width: 0,
                   borderRadius:"100%",
                   height: 30,
                   padding:"2px",
                   border: "1px solid lightgray",
                   marginBottom:"10px",
                   
                   marginTop:"10px"
                 }}
               />
             </Box>
            
            <Box style={{padding:"10px",textAlign:"",fontWeight:"700",marginTop:"30px",marginBottom:"10px"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {/* {reviews.productName} */}<a href='/rajShop' className="visits" style={{background:"", color:"black"}}>Sara</a>
            
            {/* <br></br> */}
            
            <p style={{fontSize:"16px",textAlign:"",fontWeight:"700",marginTop:"5px"}}><a href='/rajShop' className="visitShop">Visit</a></p>
            <p>
            
            </p>
            
            </Box>
             </div>
            
            
            
                          {/* </Paper> */}
                          
                       
                     
                            
                         </SwiperSlide>
            
            
            
                      
                       
                         {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
                         </Box>
           {/* )) */}
          {/* } */}
         </>
      
       </Swiper>
      </div>

     </div>
      
    </div>



// new start 


  );
};

export default BestSellers;