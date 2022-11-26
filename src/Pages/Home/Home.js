import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Cart from '../../Components/Cart';
// import useAuth from '../../Hooks/useAuth';
import CartCalculation from '../../Hooks/UseCartCalculation';
// import Login from '../../Login/Login/Login';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
// import Banner from './Banner/Banner';
import './Banner/Banner.css'
import Banners from './Banners/Banners';
import BestSellers from './BestSellers/BestSellers';
import Bonus from './Bonus/Bonus';
import BuyerProduct from './BuyerProduct/BuyerProduct';
import CarouselOffer from './CarouselOffer/CarouselOffer';
import Categories from './Categories/Categories';
import Fashion from './Fashion/Fashion';
import FeaturesProduct from './FeaturesProduct/FeaturesProduct';
import Partner from './Partner/Partner';
import ShowBuyerPotter from './ShowBuyerPotter/ShowBuyerPotter';
import Visit from './Visit/Visit';



const Home = () => {
    const { shipping, tax, totalQuantity, total, grandtotal, cartProducts } = CartCalculation();
   
    // const [model, setModel] = useState([]);
    // useEffect(()=>{
    //     fetch('https://evening-chamber-61046.herokuapp.com/users')
    //     .then(res=>res.json())
    //     .then(data=>setModel(data))
    // },[])

    // const { admin, userLogOut ,buyer,buyers} = useAuth()
    return (

        
        <div>

           

                <Header></Header>
                            {/* <Banner></Banner> */}
                            <Banners></Banners>
                            {/* <Visit></Visit> */}
                            <Bonus></Bonus>
                            <BuyerProduct></BuyerProduct>
                            <ShowBuyerPotter></ShowBuyerPotter>
                            <Categories></Categories>
                            <CarouselOffer></CarouselOffer>
                            <FeaturesProduct></FeaturesProduct>
                            <BestSellers></BestSellers>
                            <Fashion></Fashion>
                            <Partner></Partner>
                            <Footer></Footer>
                             
             
                
                
             

             
           
          
           
            
           
        </div>
    );
};

export default Home;