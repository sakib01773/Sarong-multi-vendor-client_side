import React, { useState } from 'react';

const ManageTable = (props) => {
    
    const { displayName, code, subject, status, contact, _id ,index,email,img,profession,client} = props.data

  
    // const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`

    const [statu, setStatu] = useState('')
    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        console.log(statusData)
        setStatu(statusData)
    }



    const handleUpdate = (id) => {
        fetch(`https://evening-chamber-61046.herokuapp.com/buyerStatusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ statu}),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('update')
    }

    return (
        <>
      
            {/* <tbody key={_id}> */}
                 <tr role="row" style={{ question: "2px solid gray" }} >
                            {/* <th scope="row">{index + 1}</th> */}
                            <td className='text-black'>{displayName}</td>
                            <td className='text-black'>{status}</td>
                            <td className='text-black'>{profession}</td>
                            <td className='text-black'>{contact}</td>
                            
                          

                            <td>
                                <div >
                                    <select onChange={handleSelectValue} className="pending p-2 ">
                                        <option defaultValue={client}>{client}</option>
                                        <option defaultValue="approved">buyers</option>
                                     
                                        <option defaultValue="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <button className="btn-style" onClick={() => handleUpdate(_id)}>update</button>
                            </td>
                            <td>
                                <button className="btn-style" onClick={() => props.deletes(_id)}>delete</button>
                            </td>
                        </tr> 
            
                      
                      {/* </tbody> */}
             </>
       
    );
};

export default ManageTable;