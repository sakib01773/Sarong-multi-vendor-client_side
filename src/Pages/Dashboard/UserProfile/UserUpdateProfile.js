import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';


const UserUpdateProfile = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.complete = true
        fetch(`https://evening-chamber-61046.herokuapp.com/updateUser`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
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
    }
    return (
        
        <div className='py-5 edit-profile'>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center shadow" style={{background:"#7E2231",borderRadius:"20px"}}>
                            <h2 className='mb-5 text-white'>Update Profile Information</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                    className='w-75 mb-3' defaultValue={user.displayName}
                                    {...register("displayName", { required: true })}
                                    placeholder='Enter Full Name' />
                                <br />

                                <input
                                  style={{fontWeight:"600",color:" #0E1621"}}
                                    className='w-75 mb-3' defaultValue={user.email}
                                    {...register("email", { required: true })} placeholder='Enter Email' />
                                <br />
                               
                                <input
                                  style={{fontWeight:"600",color:" #0E1621"}}
                                    className='w-75 mb-3'
                                    {...register("address", { required: true })} placeholder='Enter Address' />
                                <br />
                                <input
                                  style={{fontWeight:"600",color:" #0E1621"}}
                                    className='w-75 mb-3'
                                    {...register("mobile", { required: true })} placeholder='Enter Mobile Number' />
                                <br />
                               
                                <button className='submit-all' type='submit'>Update Profile</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserUpdateProfile;