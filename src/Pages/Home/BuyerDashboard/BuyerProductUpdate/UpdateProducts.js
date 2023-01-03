import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import './UpdateProduct.css'
const UpdateProducts = () => {
   const [user,setUser]=useState({})
   const {id}=useParams()
   useEffect(()=>{
    fetch(`http://localhost:5000/update/${id}`)
    .then(res=>res.json())
    .then(data=>setUser(data))
   },[])
    // const id=useParams()

    const handleupdate=e=>{
        e.preventDefault()

        fetch(`http://localhost:5000/updateProduct/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert('update Successfully')
                setUser({})
            }
            console.log(data)
        })

    }

    const handleName=e=>{
        // e.preventDefault()
        const updateName=(e.target.value)
        const update={productName:updateName, ProductPrice:user.ProductPrice}
        setUser(update)
    }
    const handlePrice=e=>{
        // e.preventDefault()
        const updatePrice=(e.target.value)
        const update={productName:user.productName,ProductPrice:updatePrice}
        setUser(update)
    }
    return (
        <div>
           

          {/* <div className='submits'> */}
          <div className='py-5 edit-profile'>
          <Container>
          <Col md={{ span: 8, offset: 2 }}>
          <div className="login-form text-center shadow" style={{background:"#7E2231",borderRadius:"20px"}}>
          <h2 className='mb-5 text-white'>Update product</h2>

          <form onSubmit={handleupdate}>
            <input
            onChange={handleName}
            value={user.productName}
            style={{fontWeight:"600",color:" #0E1621"}}
            className='w-75 mb-3'
            placeholder='product' />
            <input
            onChange={handlePrice}
            value={user.ProductPrice}
            style={{fontWeight:"600",color:" #0E1621"}}
            className='w-75 mb-3'
            placeholder='price' />

                                   <br></br>

            <button  className='submit-all' type='submit'>Update Product</button>
            </form>
          </div>
          </Col>
          </Container>

         

          </div>
       
          {/* </div> */}
        </div>
    );
};

export default UpdateProducts;