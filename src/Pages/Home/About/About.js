import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import './About.css'
import { Container, Grid, Typography } from "@mui/material";
const About = () => {
    return (
      <div>
        <Header></Header>
        <Container sx={{ my: 10 }}>
      <Grid container spacing={2}>
        <Grid
          // data-aos="fade-right"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="3000"
          item xs={12} sm={12} md={6}>
          <Typography
            sx={{ fontStyle: "italic", fontSize: 22, color: "#3B4757" }}
            variant="body1"
            gutterBottom
          >
            The buying and selling of goods and services using the internet, when shopping online.
          </Typography>
          <Typography
            sx={{ fontWeight: "500", fontSize: 42, color: "#3B4757" }}
            variant="h4"
            gutterBottom
            component="div"
          >
           Reflect Your Patriotism By Wearing Your {" "}
            <span style={{ color: "#46AADC" }}>Traditional Dress With Pride</span>
          </Typography>
          <Typography
            sx={{ fontSize: 15, color: "#777" }}
            variant="body2"
            gutterBottom
          >


            We provide Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions.
          </Typography>


          <br />
          <Typography
            sx={{ fontSize: 15, color: "#777" }}
            variant="body2"
            gutterBottom
          >
            In an environment rooted in respect and compassion, we strive to
            nourish each child's spirit and provide a protective space for him
            or her to grow.
          </Typography>
        </Grid>
        <Grid
          // data-aos="fade-left"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="3000"
          item xs={12} sm={12} md={6}>
          <img height="370px" width="450px" src="https://i.pinimg.com/736x/09/e5/ab/09e5ab9daa16436b0f5ff55b034d744c.jpg" alt="" />
        </Grid>
      </Grid>
    </Container>
        <Footer></Footer>
      </div>
    );
};

export default About;