import React, { useEffect } from 'react';
// import image1 from '../../../../images/developer.jpg'
// import image2 from '../../../../images/mern.png'
// import image3 from '../../../../images/designer.jpg'
import './Bonus.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Bonus = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
    return (
        <div>
            <div className="container mb-5 p-3 mt-5">
                  {/* <h1  className="text-info mb-5 mt-5">Services</h1> */}
            <div data-aos="fade-up" className="row row-cols-1 row-cols-md-3 g-4">

            <div data-aos="fade-up" class="col">
              <div className="card  project" style={{border:"2px solid white"}}>
                
            
                {/* <h1>{id}</h1> */}
                            <img style={{border:"2px solid white"}} className="image-design" src="https://storage.googleapis.com/monarchmart-storage/uploads/all/5I2NQ0cKI8VfWOg2WMlam7PgbLRLTeStEK9WI78v.jpg" class="card-img-top" alt="..." />


                          </div>
            </div>

            {/* 2nd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
            
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src="https://storage.googleapis.com/monarchmart-storage/uploads/all/1mlj3M5AHVTBhWqtEdJymO0Io0lSFKSEQRBMGcg3.jpg" class="card-img-top" alt="..." />


                          </div>
            </div>


            {/* 3rd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
            
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src="https://storage.googleapis.com/monarchmart-storage/uploads/all/jmA3CxSnycAheitCglwI6ybRw6PD9x7eylVbzHgF.jpg" class="card-img-top" alt="..." />


                          </div>
            </div>



            {/* 4rd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
            
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src="https://storage.googleapis.com/monarchmart-storage/uploads/all/7qbaCjwGgK2xk7n4T4s7ER9m6Yr9JbR5PlPLAyYz.jpg" class="card-img-top" alt="..." />


                          </div>
            </div>



            {/* 5th  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
            
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src="https://storage.googleapis.com/monarchmart-storage/uploads/all/dN2zmsT53g6m1b3ifsnO5xlOBvxmcD5cnx5aEU6r.jpg" class="card-img-top" alt="..." />


                          </div>
            </div>



            {/* 6th  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
            
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src="https://storage.googleapis.com/monarchmart-storage/uploads/all/H4Cl2o6a7v6qzm9oR14GsCVvLNAZHLKYLAzPKFjw.jpg" class="card-img-top" alt="..." />


                          </div>
            </div>
            </div>
                
            </div>
        </div>
    );
};

export default Bonus;