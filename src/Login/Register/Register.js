import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { Autocomplete, Button, CardMedia, Grid, Paper, TextField, Toolbar, Typography,Alert } from "@mui/material";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import './Register.css'
import useAuth from '../../Hooks/useAuth';
import { Box } from "@mui/system";
import Backdrop from '@mui/material/Backdrop';

const Register = () => {

    const style = {
        position: 'absolute',
        // color="warning",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 80,
        bsckGround:"white",
        p: 4,
      };

    const { registerUser, loginWithGoogle,authError } = useAuth()
    const [open, setOpen] = React.useState(false);
    const [opens, setOpens] = React.useState(false);
const handleOpen = () => setOpen(true); 
const handleOpens = () => setOpens(true); 
const handleClose = () => setOpen(false);
const handleCloses = () => setOpens(false);
    //Location & Navigate
    const location = useLocation()
    const navigate = useNavigate()

    //handle google login
    const handleGoogleLogin = () => {
        loginWithGoogle(location, navigate);
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data)
       
        if (data.password !== data.password2) {
            alert('Your Password did not match')
            return;
        }

        registerUser(data.email, data.password, data.name,data.client, data.address, data.choose,data.profession,data.contact, data.status="pending", location, navigate)
    }
    return (
     <div className='signin-background'>
           <div className='py-5'>
        <Container>
            <Row>
              <div className='row'>
                <div className='col-lg-4'>
                    <div className='image-change'>
                    <img  data-aos="zoom-in" height="430" width="370" src='https://i.ibb.co/PYRQwwP/1622955529676.png' alt="" />
                    </div>

                </div>

                <div className='col-lg-8'>

                <Col md={{ span: 8, offset: 2 }}>
                    <div className="login-form text-center" style={{background:"#7E2239",borderRadius:"20px"}}>
                        <h2 className='mb-5  text-white mt-5'>Sign Up to SARONG</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                            style={{fontWeight:"500"}}
                            className='w-75 mb-3'  {...register("name", { required: true })} placeholder='Enter Full Name' /> <br />
                            <input
                            style={{fontWeight:"500"}}
                            className='w-75 mb-3'  {...register("email", { required: true })} placeholder='Enter Email' /> <br />
                            <input
                            styele={{fontWeight:"500"}}
                            className='w-75 mb-3' {...register("password", { required: true })} placeholder='Enter Password' /> <br />
                            <input
                            style={{fontWeight:"500"}}
                            className='w-75 mb-3' {...register("password2", { required: true })} placeholder='Re-enter Password' /> <br />
                            {/* <input
                            style={{fontWeight:"500"}}
                            className='w-75 mb-3' {...register("client", { required: true })} placeholder='buyer / user' /> <br /> */}

<Box style={{marginTop:"10px"}}>

{/* <div> */}
<div className='row'>
    <div className='col-lg-6 '>

    <Button className="user-designs ms-5"  style={{background:"", padding:"", fontSize:"", marginTop:"10px"}} onClick={handleOpens}>User</Button>
<Modal
aria-labelledby="transition-modal-title"
aria-describedby="transition-modal-description"
open={opens}
onClose={handleCloses}
closeAfterTransition
BackdropComponent={Backdrop}
BackdropProps={{
timeout: 500,
}}
>
<Fade in={opens}>
<Box sx={style}>
<Box>

<input
{...register("client")}
type="text"
placeholder='user'
// onChange={handleonChange}
className="p-2 m-2"
/>

{/* <button className="btn-style" onClick={() => handleUpdate(cart._id)}>update</button> */}
</Box>
</Box>
</Fade>
</Modal>

    </div>


    <div className='col-lg-6'>
    <Box>

<Button className="buyer-design me-5"  style={{background:"", padding:"",marginTop:"10px", marginBottom:"10px"}} onClick={handleOpen}>Buyer</Button>
<Modal
aria-labelledby="transition-modal-title"
aria-describedby="transition-modal-description"
open={open}
onClose={handleClose}
closeAfterTransition
BackdropComponent={Backdrop}
BackdropProps={{
timeout: 500,
}}
>
<Fade in={open}>
<Box sx={style}>
<Box>

<input
{...register("client")}
type="text"
placeholder='buyer'
className="p-2 m-2"
/>
<input
{...register("address")}
type="address"
placeholder='address'
// onChange={handleonChange}
className="p-2 m-2"
/>
<input
{...register("profession")}
type="text"
placeholder='profession'
// onChange={handleonChange}
className="p-2 m-2"
/>
<input
{...register("choose")}
type="text"
placeholder='why choose your website'
// onChange={handleonChange}
className="p-2 m-2"
/>
<input
{...register("contact")}
type="number"
placeholder='contact number'
// onChange={handleonChange}
className="p-2 m-2"
/>
{/* <button className="btn-style" onClick={() => handleUpdate(cart._id)}>update</button> */}
</Box>
</Box>
</Fade>
</Modal>
</Box>

    </div>

</div>
{/* <br></br> */}



{/* 2nd modal monthly purchase products  */}


</Box> 
                            {/* <div >
                                    <select name="client"  className="pending p-2 ">
                                        <option defaultValue="">please Select</option>
                                        <option defaultValue="buyer">Buyer</option>
                                        <option defaultValue="user">User</option>
                                       
                                    </select>
                                </div> */}

                            <button className='submit-all sign-designs' type='submit'>Sign Up</button>
                        </form>
                        <div className='login-meta mt-4 mb-5'>
                            <p className='text-white'>Already have an account? <Link to={'/login'}><span className='login-links'style={{color:"#46AADC"}}>Login here</span></Link></p>
                            <span style={{ cursor: "pointer" }} className='fs-4 text-white'>Continue with <FcGoogle onClick={handleGoogleLogin} className='fs-2 google' /></span>
                        </div>


                        {
          authError && 
          <Alert severity="error">{authError}</Alert>
      }
                    </div>
                </Col>

                </div>
              </div>
            </Row>
        </Container>
    </div>
     </div>
    );
};

export default Register;