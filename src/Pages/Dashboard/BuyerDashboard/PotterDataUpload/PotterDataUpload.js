import React, { useEffect, useState } from 'react';

// import './UserAddQuestion.css'
import { Link } from 'react-router-dom';
// import useAuth from '../../../Hooks/useAuth';
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
  import { NavLink } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
// import UploadProductBuyer from './UploadProductBuyer';
// import UserUploadSyllbus from './UserUploadSyllbus';
// import './ProductBuyer.css'
import useAuth from '../../../../Hooks/useAuth';
// import useAuth from '../../../Hooks/useAuth';


const PotterDataUpload = () => {

    const { user } = useAuth()
    const [service,setService]=useState([])
    // delete 
    // email: user.email
   

   

    useEffect(()=>{
      fetch(`https://evening-chamber-61046.herokuapp.com/potterproducts/${user?.email}`)
      .then(res=>res.json())
      .then(data=>setService(data))
  },[user?.email])


    const handleDelete=(id)=>{
      const proceed=window.confirm('are you sure, you want to delete');
      fetch(`https://evening-chamber-61046.herokuapp.com/deletePotter/${id}`,{
          method:'DELETE'
      }).then(res=>res.json())
      .then(data=>{
          if(data.deletedCount>0){
              alert('Delete')
              const remaining=service.filter(service=>service._id !== id)
              setService(remaining)
          }
      });
      console.log(id)
  }

    return (
        <div className=''>
            <div className='d-flex justify-content-between align-items-center my-question-header container'>
                <h2 style={{fontWeight:"700",color:""}}>My <span className='my-question'>Product</span></h2>
                <Link to='/dashboard/potterupload'>
                    <button className='btn-style'>Upload Your Product</button>
                </Link>
            </div>
          <Container>
          <Grid
          container
          spacing={2}
          sx={{ mt: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {service?.map((single) => (
            <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={4} md={4}>
              <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 500,
                  flexGrow: 1,
                  boxShadow: "0px 14px 22px rgb(42 135 158 / 10%)"
                }}
              >
                <Grid  container spacing={2} columns={{ xs: 4, sm: 8, md: 4 }}>
                  <Grid item xs={12} sm={12} md={12}>
                  <div className='photo'>
                    <div className='photoShops photoalbums'>
                      <img height="200" width="250" style={{borderRadius:"15px"}} src={single?.img}></img>
                   
                    </div>
                   </div>
                  </Grid>
                  <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                    <Box style={{textAlign:"left"}}>
                      <Typography variant="h6">{single?.productName}</Typography>

                      {/* <Typography variant="body">
                        <span style={{ fontWeight: 700 }}> লেখক: </span>{" "}
                        <span>{single?.author}</span>
                      </Typography> */}
                      {/* <br /> */}

                      <Typography variant="body">
                        <span style={{ fontWeight: 700 }}> Price: TK.{single?.ProductPrice}</span>
                        
                      </Typography>
                      <br />
                      <Rating
                        name="half-rating-read"
                        defaultValue={single?.rating}
                        precision={0.5}
                        readOnly
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                  <NavLink
                    to={`/dashboard/userspotter/updatepotter/${single._id}`}
                    style={{ textDecoration: "none", marginRight: "5px" }}
                  >
                    <Button
                     className='btn-style download-btn'
                    size="small">
                      Edit
                    </Button>
                  </NavLink>
                  <Button
                  className='btn-style download-btn'
                    size="small"
                    // sx={ButtonStyle}
                    onClick={()=>handleDelete(single?._id)}
                  >
                    Delete
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
          </Container>
        </div>
    );

    
    
};



export default PotterDataUpload;