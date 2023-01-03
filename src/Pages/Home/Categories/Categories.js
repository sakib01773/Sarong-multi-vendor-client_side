// import React from 'react';
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Avatar, Box, Container, Rating, Typography, Paper } from "@mui/material";
// import "./TestimonialSlider.css";
import './Categories.css'

// import required modules
import { FreeMode, Pagination,Autoplay } from "swiper";
import { Link } from "react-router-dom";
// import useAuth from "../../ManyPages/hooks/useAuth";

const Categories = () => {
//  const {user}=useAuth()
//   const [review,setReview]=useState([])
//   useEffect(()=>{
//     fetch('http://localhost:5000/review')
//     .then(res=>res.json())
//     .then(data=>setReview(data))
//   },[])
  return (
    <div className="container">
         <h1 style={{textAlign:"left"}} className="mt-5">Categories</h1>
     <div className="row">
      <div className="">
      <Swiper
         className="mySwiper"
         slidesPerView={6}
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
              spaceBetween: 30,
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
        
        
             <div>

              

                <Swiper>


                <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/jamdani">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://storage.googleapis.com/monarchmart-storage/uploads/all/so09ZxWECbxkv7YJ4Gz8mVKlzZIX2Palu5wNUXGC.png'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#D0425C"}}> Jamdani </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>



   {/* 2nd  */}

   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/jamdani">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://storage.googleapis.com/monarchmart-storage/assets/img/all_cat_rainbow.png'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#D0425C"}}> All Categories </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>


   {/* 3rd  */}


   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/jamdani">

               <img height='90' style={{borderRadius:"50%"}}
                  src='http://rmcabasak.com/img/product/28213500_1.jpg'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#D0425C"}}> Cotton </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>


   {/* 4th  */}

   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/tat">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://assets.ajio.com/medias/sys_master/root/20210627/pEd7/60d89308f997ddb312f77521/-473Wx593H-461375731-yellow-MODEL.jpg'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#D0425C"}}> Tater Sharee </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>


   {/* 5th  */}

   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/pottery">

               <img height='90' style={{borderRadius:""}}
                  src='https://cdn.britannica.com/91/59191-050-3978853F/urn-Pottery-phase-Neolithic-Banshan-Yangshao-Henan.jpg'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#D0425C"}}> Pottery </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>


   {/* 6th  */}

   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/pottery">

               <img height='90' style={{borderRadius:""}}
                  src='https://m.media-amazon.com/images/I/41T3mQpgbrL.jpg'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#D0425C"}}> Nakshi Katha </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>


           


        




          







          





             
             {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}

                </Swiper>
             {/* <h1>{reviews._id}</h1> */}
           
             </div>
          
         </>
      
       </Swiper>
      </div>

     </div>
      
    </div>
  );
};

export default Categories;