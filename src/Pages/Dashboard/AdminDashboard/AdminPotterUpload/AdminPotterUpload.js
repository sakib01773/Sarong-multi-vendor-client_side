import React from 'react';
import { Col, Row, Container,Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';
// import useAuth from '../../../../Hooks/useAuth';


const AdminPotterUpload = () => {
    const { user } = useAuth()
    // const {admin}=useAuth()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = data => {
        // data.userName = user.displayName
        
        // const useing=user.email
        data.buyerEmail = user.email
        data.likes = []
        // data.status = 'Pending'
     

        fetch("https://evening-chamber-61046.herokuapp.com/adminsPotter", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.insertedId){
                    alert('added successfully');
                    reset()
                }
                
            });
    };

   
    return (
        <div className='py-5'>
            
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center" style={{background:"#7E2231",borderRadius:"20px"}}>
                            <h2 className='mb-5 text-white'>Add Your Potter</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("productName", { required: true })} placeholder='Product Name' /> <br />

                                <input
                                type="number"
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("ProductPrice", { required: true })} placeholder='Product Price' /> <br />
                                 
                                 <input
                                 style={{fontWeight:"600",color:" #0E1621"}}
                                 className='w-75 mb-3' {...register("img", { required: true })} placeholder="img url"/>
                                 
                                {/* <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("sizing", { required: true })} placeholder='Size example : M' /> <br /> */}
                              
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("categories", { required: true })} placeholder='categories' /> <br />
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("description", { required: true })} placeholder='Description' /> 

                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("warrenty", { required: true })} placeholder='warrenty example : 1 month' />
                             
                              

                                {/* <input> */}
                                <Form.Group as={Col} controlId="formGridRating"        style={{marginLeft:"84px",marginRight:"84px", borderRadius:"15px",color:"white"}}>
                                        <Form.Label>
                                            Give Us A Rating (1 is the wrost , 5 is the best)
                                        </Form.Label>
                                        <select
                                        style={{borderRadius:"30px"}}
                                            required
                                            className="form-control shadow-none"
                                            {...register("rating")}
                                        >
                                            <option>Select Rating</option>
                                            <option value="1">1</option>
                                            <option value="1.5">1.5</option>
                                            <option value="2">2</option>
                                            <option value="2.5">2.5</option>
                                            <option value="3">3</option>
                                            <option value="3.5">3.5</option>
                                            <option value="4">4</option>
                                            <option value="4.5">4.5</option>
                                            <option value="5">5</option>
                                        </select>
                                    </Form.Group>
                                {/* </input> */}
                                    <br></br>
                                
                                

                               
                               <div className='paterns'>
                               <button className='submit-all' type='submit'>Submit</button>

                               </div>
                                
                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default AdminPotterUpload;