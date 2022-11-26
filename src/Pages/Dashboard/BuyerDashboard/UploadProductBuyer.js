import React from 'react';
import './ProductBuyer.css'

const UploadProductBuyer = (props) => {

    
    const { productName, ProductPrice,img, _id } = props.data
    
    


   


   

    return (
       <>
           <tr role="row" style={{ question: "2px solid gray",textAlign:"left" }} >
                            {/* <th scope="row">{index + 1}</th> */}
                            <td style={{fontWeight:"600",color:"white"}}>{productName}</td>
                            <td style={{fontWeight:"600",color:"white"}}>{ProductPrice}</td>
                            {/* <td>{authorName}</td> */}
                         

                             <td>   
                                <button  className="btn-style download-btn"><a style={{textDecoration:"none",color:"white"}} href={img}>See Photo</a></button>
                            </td> 
                           
                            <td> 
                                <button
                                className="btn-style download-btn"
                            onClick={() => props.handleDeletes(_id)}
                            >
                                Delete question
                            </button></td>
                        </tr>
       </>
    );
};

export default UploadProductBuyer;