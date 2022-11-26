import { Divider, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import React, { useState } from 'react';
import CartCalculation from '../Hooks/UseCartCalculation';

// const [SearchValue,setSearchValue]= useState('')

import './Cart.css'
const Cart = (props) => {
    const { shipping, tax, totalQuantity, total, grandtotal, cartProducts,handleSearchs ,handleValues,searchValues,model} = CartCalculation();
    console.log(cartProducts);

    // const [searchValue,setSearchValue]= useState('')
    // const  handleSearch=(e)=>{
    //     e.preventDefault()
    //     const values = e.target.value;
    //     // console.log(values)
    //     setSearchValue(values)
    // }

    // const handleValue=()=>{
          
    // }

    

    

    return (
       <div>

<from onClick={handleValues} className="">
                            <input placeholder='cupon code' onBlur={handleSearchs} className="mb-2 input-design me-3" ></input>
                            <button className='apply-design'>Apply</button>
                        </from>
         <List sx={{ pt: 0 }}>
             
            <ListItem className='order-design' sx={{color: '' }}>
                <Typography variant='h5'>Order Summary </Typography>
            </ListItem>
            <Divider />

            <ListItem  >
                <Typography style={{fontWeight:"500"}}>Total Quantity: {totalQuantity} </Typography>

            </ListItem>
            <ListItem  >
                <Typography style={{fontWeight:"500"}}>Total: {total.toFixed(2)} Taka</Typography>

            </ListItem>
            <ListItem  >
                <Typography style={{fontWeight:"500"}}>Shipping: {shipping.toFixed(2)} Taka</Typography>

            </ListItem>
            <ListItem  >
                <Typography style={{fontWeight:"500"}}>Tax: {tax.toFixed(2)} Taka</Typography>

            </ListItem>
            <Divider />
            <ListItem >
                <ListItemIcon>
                    <Typography style={{fontWeight:"500"}}>Grand Total: {grandtotal.toFixed(2)} Taka</Typography>
                </ListItemIcon>

            </ListItem>

            
                <ListItem>
                <ListItemIcon>
                     <Typography style={{fontWeight:"500"}}>Discount Total: {model} Taka</Typography>
                 </ListItemIcon>
                </ListItem>
            
            <ListItem>
                {props.children}
            </ListItem>
        </List>
       </div>
    );
};

export default Cart;