import { SettingsSuggestRounded } from '@mui/icons-material';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import useAuth from '../../../../Hooks/useAuth';
// import useAuth from '../../../Hooks/useAuth';


const BuyerProductUpdate = () => {
    // const { user } = useAuth()
  const [user,setUser]=useState('')
    const handleName=e=>{
        // e.preventDefault()
        const updateName=(e.target.value).toLowerCase()
        // const update={productName:updateName}
        setUser(updateName)
    }
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handle = (id) => {
        // e.preventDefault()
        // data.complete = true
        fetch(`http://localhost:5000/updateProduct/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({user}),
        })
            .then((res) => res.json())
            .then((result) => {
               
                if(result.modifiedCount){
                    console.log(result)
                   alert("Confarom Profile Update")
                        reset()
                }
                // 
            });
            // e.preventDefault()
    }
    return (
        
        <div className='py-5 edit-profile'>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center shadow" style={{background:"#182533",borderRadius:"20px"}}>
                            <h2 className='mb-5 text-white'>Update product</h2>
                            {/* <form> */}
                                {/* <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                    className='w-75 mb-3' defaultValue={user.displayName}
                                    {...register("displayName", { required: true })}
                                    placeholder='Enter Full Name' />
                                <br /> */}

                                {/* <input
                                  style={{fontWeight:"600",color:" #0E1621"}}
                                    className='w-75 mb-3' defaultValue={user.email}
                                    {...register("email", { required: true })} placeholder='Enter Email' />
                                <br /> */}
                               
                                <input
                                onChange={handleName}
                                  style={{fontWeight:"600",color:" #0E1621"}}
                                    className='w-75 mb-3'
                                    {...register("productName", { required: true })} placeholder='product' />
                                <br />
                                {/* <input
                                  style={{fontWeight:"600",color:" #0E1621"}}
                                    className='w-75 mb-3'
                                    {...register("productPrice", { required: true })} placeholder='productPrice' /> */}
                                <br />
                               
                                <button onClick={()=>handle()} className='submit-all' type='submit'>Update Product</button>
                            {/* </form> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BuyerProductUpdate;