import React, { useContext, useEffect, useState } from 'react';
// import QuestionCart from './QuestionCart';
import { Link, NavLink } from "react-router-dom";



// import useAuth from '../../hooks/useAuth';
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
// import useAuth from '../../../Hooks/useAuth';
// import { CartContext } from '../../../Context/CartContext';
// import './TaterSharee.css'
// import Header from '../../../Shared/Header/Header';
// import Footer from '../../../Shared/Footer/Footer';
import ReactPaginate from 'react-paginate';
import useAuth from '../../../../Hooks/useAuth';
import Header from '../../../../Shared/Header/Header';
import Footer from '../../../../Shared/Footer/Footer';
// import { CartContext } from '../../../../Context/CartContext';
// import spinner from './../../../Assets/Images/Infinity-1s-200px.svg'
const Topup = () => {

    

  

    const [questions, setQuestions] = useState([]);
    const [model, setModel] = useState([]);
    const [type, setType] = useState("")
    const [searchValue,setSearchValue]= useState('')
 
    
   
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 10;

    // console.log(questions)

    const handlePageChange = (data) => {
        setPage(data.selected);
    }

    const {admin}=useAuth()
   
    // checkbox er value true or false return kore

    // useEffect(() => {
    //     fetch('https://evening-chamber-61046.herokuapp.com/TaterSharees')
    //         .then(res => res.json())
    //         .then(data => setQuestions(data.TaterSharee))
    // }, [])

    useEffect(() => {
        console.log(type)
        fetch('https://evening-chamber-61046.herokuapp.com/sharee')
            .then(res => res.json())
            .then(data => {
                setQuestions(data.allQuestions)
                setModel(data.allQuestions)
                // setSearchValue(data.TaterSharees)
                // console.log(data)

                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [type,page]);


    useEffect(()=>{
        fetch('https://evening-chamber-61046.herokuapp.com/sharee')
        .then(res=>res.json())
        .then(data=>setModel(data.allQuestions))
    },[])
      
    const handleValue = (e) => {
      
        e.preventDefault()
        // const values = e.target.value;
        // console.log(values)
        // console.log(questions)
        const newValue = model?.filter(ques => ques?.productName?.toLocaleLowerCase()?.includes(searchValue))
        
        // console.log(newValue)
        // newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
        // console.log(newValue)
        setModel(newValue)
        // console.log(newValue)
       
      
    }

    // const managePost = questions?.filter(models => models?.role === true);
    const managePost = model?.filter(models => models?.shop
        === 'topup');
    console.log(model)
    console.log(managePost)
    

    
    
 
   

    return (
        
    <div>

    
        {/* <Header></Header> */}
          <div  style={{background:""}}>
            <Header></Header>
            
          <div className="container text-black mt-5 mb-5">
          <h2 style={{fontWeight:"700"}}><span style={{color:"#D0425C"}}>TopUp</span> Fashion</h2>
          
            <div className="row ">
               
            <img className='mt-5' height="300" width="" style={{borderRadius:"15px"}} src='https://storage.googleapis.com/monarchmart-storage/uploads/all/5I2NQ0cKI8VfWOg2WMlam7PgbLRLTeStEK9WI78v.jpg'></img>


            
                <div className="col-md-4">
                   
                </div>
                <div className="col">
                    <div className="search-box mb-8">
                       
                    </div>
                </div>
            </div>
            {/* {questions.length ? */}
            <div className="row g-4" >
                <div className="col-12">
                    <div className="question-sidebar">
                        
                      

                      

                    </div>
                </div>
                <div className="">
                    
                      
               <Box>
               <h2 style={{fontWeight:"600"}}>Featured Products</h2>
               <Box style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
               <hr style={{ display: 'block',alignItems:"center", width: '10%', height: '3px', backgroundColor: 'red', border: 0 }} />
               </Box>
               </Box>
                          
                            {/* <div className="row"> */}
         <Grid
          container
          spacing={2}
          sx={{ mt: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
           
          {managePost?.map((single) => (

            <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={4} md={3}>
              <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                //   maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 40%)"
                }}
              >
                 <Link style={{textDecoration:"none",color:"black"}} to={`/bookDetails/${single._id}`}>

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

                 </Link>
               
             
              </Paper>
            </Grid>
          ))}
        </Grid>
                            {/* </div> */}
                    
                </div>

                <div className="d-flex mt-5">
                    <div className='mx-auto'>

                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={1}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            containerClassName='pagination'
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            previousClassName='page-link'
                            nextClassName='page-link'
                            breakClassName='page-item'
                            breakLinkClassName='page-link'
                            activeClassName='active'
                        />

                    </div>
                </div>


            </div >

            {/* : <div><h5>Loading...</h5></div>} */}



        </div >
        <Footer></Footer>
      </div>
    </div>
    );
};

export default Topup;