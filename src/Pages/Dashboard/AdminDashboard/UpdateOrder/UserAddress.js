import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Fab, ListItem, Tooltip, Typography,MenuItem ,Select} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";


const CustomerAddress = ({ order, handleDelete }) => {

    const addressStyle = { display: 'flex', justifyContent: 'space-between' };

    const [status, setStatus] = useState('')

    const handleUpdate = (id) => {
        fetch(`https://evening-chamber-61046.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('update')
    }

    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        setStatus(statusData)
    }

    return (
        <Box>

            <ListItem button divider></ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>My Name</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.cus_name}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Country</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.cus_country}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>City</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.cus_city}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>State</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.cus_state}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Post Code</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.cus_postcode}</Typography>
                    </Grid>

                </Grid>
            </ListItem>

            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Phone</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.cus_phone}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Email</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.cus_email}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Total Amount</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >${order?.total_amount} {order?.currency}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Tran_id</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography >{order?.tran_id}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Date</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography  >{order?.date}</Typography>
                    </Grid>

                </Grid>
            </ListItem>




            <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
            <select onChange={handleSelectValue} className="pending p-2 ">
                                        <option defaultValue={order.status}>{order.status}</option>
                                        <option defaultValue="approved">Approved</option>
                                        <option defaultValue="pending">Pending</option>
                                        <option defaultValue="cancelled">Cancelled</option>
                                    </select>


                                    <button className="btn-style" onClick={() => handleUpdate(order._id)}>update</button>

        <Tooltip title={order?.status} arrow placement="top">
          <Fab
            onClick={() => handleDelete(order._id)}
            variant="extended"
            size="small"
            color="error"
            aria-label="add"
          >
            <DeleteIcon sx={{ mr: 1 }} />
            Delete
          </Fab>
        </Tooltip>
      </ListItem>
        </Box>
    );
};

export default CustomerAddress;