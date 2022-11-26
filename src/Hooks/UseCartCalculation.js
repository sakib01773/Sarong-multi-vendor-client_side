import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

const CartCalculation = () => {
    const cartProducts = useContext(CartContext)[0];
   
    let totalQuantity = 0;
    let total = 0;
    for (const product of cartProducts) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.ProductPrice * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }


    const shipping = total > 0.10 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandtotal = total + shipping + tax;
    

    const [searchValues,setSearchValues]= useState('');
    const [model,setModel]= useState('');
    // const [UpdateTotal,setUpdateTotal]= useState('');
    const  handleSearchs=(e)=>{
        e.preventDefault()
        const values = e.target.value;
        console.log(typeof(values))
        // values='';
        setSearchValues(values)
    }

    const handleValues=()=>{

        // if(searchValues!=stri){
        //     alert("Not a cupon")
        // }
    //    searchValues='';
    // && grandtotal<=500 
        if(searchValues === 'sakib'){
        
            const totalValues=parseFloat((grandtotal * 20)/100);
            const updateDiscount= parseFloat(grandtotal - totalValues);
            // document.getElementById('promo-code').innerText=updateDiscount;
            setModel(updateDiscount);
            console.log(typeof(updateDiscount))
            
            
        }
       
        else{
            const grandtotal = total + shipping + tax;
            setSearchValues(grandtotal)
        }
        // console.log("data ahjjdkdk")

        
          
    }


    
    return {
        cartProducts,
        totalQuantity,
        shipping,
        tax,
        total,
        grandtotal,
        searchValues,
        model,
        handleSearchs,
        handleValues,
        
    }
}
export default CartCalculation;