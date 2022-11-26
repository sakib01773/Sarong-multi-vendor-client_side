import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../Hooks/useAuth';
import { TextField, Toolbar, Typography,Alert } from "@mui/material";




const Login = () => {

    const { loginWithGoogle, loginWithOwnEmailAndPass,authError } = useAuth()

    //Location & navigate
    const location = useLocation()
    const navigate = useNavigate()

    //handle google login here
    const handleGoogleLogin = () => {
        loginWithGoogle(location, navigate);
    };



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data.email)
        loginWithOwnEmailAndPass(data.email, data.password, location, navigate)
    }
    return (
      <div className='login-background'>
          <div className='py-5'>
            {/* <Header></Header> */}
            <Container>
                <Row>
                <div className='row'>
                    <div className='col-lg-4'>
                     <div className='mt-5'>
                     <img data-aos="zoom-in" height="340" width="360" src='https://i.ibb.co/PYRQwwP/1622955529676.png' alt="" />
                     </div>
                    </div>
                    <div className='col-lg-8'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center" style={{background:"#7E2239",borderRadius:"20px"}}>
                            <h2 className=' text-white'>Login to SARONG</h2>
                            {/* onSubmit={handleSubmit(onSubmit)} */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                style={{fontWeight:"500"}}
                                    className='w-75 mb-3'
                                    {...register("email", { required: true })}
                                    placeholder='Enter Email' />
                                <br />

                                <input
                                style={{fontWeight:"500"}}
                                    className='w-75 mb-3'
                                    {...register("password", { required: true })} placeholder='Enter Password' />
                                <br />

                                <button className='submit-all' type='submit'>Login</button>
                            </form>
                            <div className='login-meta'>
                                <p className='text-white mt-3'>New to Education <Link to={'/register'}><span className='login-links' style={{color:"#46AADC"}}>Create a free Account</span></Link></p>
                                <span onClick={handleGoogleLogin} style={{ cursor: "pointer" }} 
                                // onClick={handleGoogleLogin}
                                 className='fs-4 text-white'>Continue with <FcGoogle  className='fs-2 google' /></span>
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

export default Login;