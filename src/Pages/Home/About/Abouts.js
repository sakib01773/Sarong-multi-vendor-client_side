import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
// import Header from "../../Shared/Header/Header";
// import Footer from "../Footer/Footer";
// import Aos from 'aos';
// import prevideoimg from "../../../Assets/Images/AboutUs/video-prev.jpg";


const Abouts = () => {

//   useEffect(() => {
//     Aos.init({
//       duration: 1000
//     });
//   }, []);
  return (
  <div>
    <Header></Header>
      <Container sx={{ my: 10 }}>
      <Grid container spacing={2}>
        <Grid
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
          item xs={12} sm={12} md={6}>
          <Typography
            sx={{ fontStyle: "italic", fontSize: 22, color: "#3B4757" }}
            variant="body1"
            gutterBottom
          >
            Igniting the spark of genius in every child
          </Typography>
          <Typography
            sx={{ fontWeight: "500", fontSize: 42, color: "#3B4757" }}
            variant="h4"
            gutterBottom
            component="div"
          >
            We Work to Understand Your{" "}
            <span style={{ color: "#46AADC" }}>Kids Needs</span>
          </Typography>
          <Typography
            sx={{ fontSize: 15, color: "#777" }}
            variant="body2"
            gutterBottom
          >


            We provide a warm and encouraging atmosphere that enhances
            self-concept, instills basic moral values, encourages social
            interaction, and enriches awareness of the natural and cultural
            world. We’re a warm and loving community of preschoolers, teachers,
            and parents.
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
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
          item xs={12} sm={12} md={6}>
          <img height="370px" width="450px" src="https://images.unsplash.com/photo-1615560480284-64ad1051fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZWV0JTIwY2hpbGRyZW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
        </Grid>
      </Grid>
    </Container>
    <Footer></Footer>
  </div>
  );
};

export default Abouts;