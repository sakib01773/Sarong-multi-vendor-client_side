import React, { useState } from 'react';
// import swal from 'sweetalert';

const MakeAdmin = () => {
    const[email,setEmail]=useState('');
    const[success,setSuccess]=useState(false)
    const handleonBlur=e=>{
       setEmail(e.target.value)
    }
    const handleAdmin=e=>{
        const user={email}
        fetch('https://evening-chamber-61046.herokuapp.com/userLogin/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
         body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
              
                        console.log(data)
                     setSuccess(true)
                     alert('confarm admin success')
            }
          
        })
           
       
        e.preventDefault()
    }
    return (
        <div>
            <h2 className='text-white'>Make Add Admin</h2>
            <form onSubmit={handleAdmin}>
            <label htmlFor='email' className='emails'>
          Email:
        </label>
        <br />
        <input
          type='email'
          name='email'
          id='email'
          onBlur={handleonBlur}
          required
          className=' outline-none px-3 py-2 '
        />
        <button className='button' type="submit">Make Admin</button>

        {/* {
                success &&
                // <h1 className="color:red">Success new admin </h1>
                swal("Admin Add Successful!", "You are new admin!", "success")
            } */}
            </form>
           
        </div>
    );
};

export default MakeAdmin;