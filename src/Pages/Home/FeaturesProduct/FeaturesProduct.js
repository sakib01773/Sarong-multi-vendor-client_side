// import React from 'react';
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Avatar, Box, Container, Rating, Typography , Paper} from "@mui/material";
// import "./FeaturesProduct.css";

// import required modules
import { FreeMode, Pagination,Autoplay } from "swiper";

const FeaturesProduct = () => {
//  const {user}=useAuth()
  const [review,setReview]=useState([])
  useEffect(()=>{
    fetch('https://evening-chamber-61046.herokuapp.com/features')
    .then(res=>res.json())
    .then(data=>setReview(data))
  },[])
  return (
    <div data-aos="fade-up" className="container">
        <h2 className="features">Features Product</h2>
     <div className="row">
      <div className="">
      <Swiper
         className="mySwiper"
         slidesPerView={3}
         spaceBetween={30}
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
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              }
          }}
       
         
         
        
         modules={[FreeMode, Pagination,Autoplay]}
        
       
       
       >



  

  
        
      
 
         
 
         
 
 
 
         <>
          {
           review.map((reviews)=>(

             <Box>
            

<SwiperSlide className="" style={{width:"300px",  background:" ",padding:"12px",borderRadius:"12px"}}>  

<Paper
                sx={{
                  p: 1,
                  margin: "auto",
                //   maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >

<div style={{ width:"200px" }}>
 
 <Box sx={{ display: "flex", justifyContent: "center" }}>
   <img height="200" width="240" style={{borderRadius:""}}
    src={reviews.img}
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

<Box style={{padding:"10px",textAlign:"left",fontWeight:"700"}}>
{/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
{reviews.productName}

{/* <br></br> */}

<p style={{fontSize:"16px",textAlign:"left",fontWeight:"700"}}> TK.{reviews.ProductPrice}</p>
<p>

</p>

</Box>
 </div>



              </Paper>
              
           
         
                
             </SwiperSlide>



          
           
             {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
             </Box>
           ))
          }
         </>
      
       </Swiper>
      </div>

     </div>
      
    </div>
  );
};

export default FeaturesProduct;