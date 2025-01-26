import React from "react";
import { Paper } from "@mui/material";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Trainers from "../components/Trainers";



const Home = ({ mode }) => {
  return (
    <Paper 
    elevation={0}
                    sx={{
                        height: "100vh",
                    }}>
      <HeroSection mode={mode}/>
      <About mode={mode}/>
      <Trainers mode={mode}/>
      <Events mode={mode}/>
      <Gallery mode={mode}/>
      <div id="faq-section">
      <FAQ mode={mode}/>
      </div>
      <Contact mode={mode}/>
    </Paper>
  );
};

export default Home;