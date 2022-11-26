//  <Modal
// aria-labelledby="transition-modal-title"
// aria-describedby="transition-modal-description"
// open={open}
// onClose={handleClose}
// closeAfterTransition
// BackdropComponent={Backdrop}
// BackdropProps={{
//   timeout: 500,
// }}
// >
// <Fade in={open}>
//   <Box sx={style}>
//   {/* <form onSubmit={handleSubmit(onSubmit)}> */}








// <Grid item xs={12} sm={3} md={3}>
//             {
//                 cart.map(cart =>
//                     <Box sx={{ pb: 3 }} key={cart._id} setData={cart.buyerEmail} >
//                         <Paper
//                             sx={{
//                                 p: 1,
//                                 margin: "auto",
//                                 maxWidth: 500,
//                                 flexGrow: 1,
//                                 boxShadow: "0px 14px 22px rgb(42 135 158 / 10%)",
//                             }}
//                         >
//                             <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
//                                 <Grid item xs={2} sm={4} md={4}>
//                                     <CardMedia
//                                         component="img"
//                                         sx={{ objectFit: "cover", height: 200, width: "auto" }}
//                                         alt="complex"
//                                         src={cart?.img}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
//                                     <Box>
//                                         <Typography variant="h6"
//                                             sx={{ fontSize: '12px', fontWeight: 900 }}
//                                         >{cart?.bookName}</Typography>


//                                         <br />

//                                         <Typography variant="body">
//                                             <span style={{ fontWeight: 700 }}>  Product: </span>
//                                             {cart?.productName}

//                                         </Typography>
//                                         <Typography variant="body">
//                                             <span style={{ fontWeight: 700 }}>  schedule: </span>
//                                             {cart?.schedule}

//                                         </Typography>
                                       
                                       
                                       

//                                     </Box>


//                                    <Box>

//                                   <input
//     {...register("date")}
//       type="date"
//       onChange={handleonChange}
//         className="p-2 m-2"
//       />
//                                   <button className="btn-style" onClick={() => handleUpdate(cart._id)}>update</button>
//                                   </Box> 
//                                 </Grid>
//                             </Grid>
//                         </Paper>
//                     </Box>
//                 )
//             }
//         </Grid>



// {/* <input type="submit" /> */}
// {/* </form> */}
 
//     <Cart>
    
//                 <Button onClick={handlePaymentGoToPage} sx={{ width: 1 }}>schedule order</Button>
//             </Cart>
//   </Box>
// </Fade>
// </Modal>