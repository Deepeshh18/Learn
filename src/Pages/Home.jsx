import React, { Fragment } from "react";
//import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from '../components/Header/Header';
//import Navbar from "../components/Header/Navbar";
//import Search from "../components/Search/Search";
import HeroSection from "../components/Hero-Section/HeroSection";
//import Company from "../components/Company-section/Company";
import AboutUs from "../components/About Us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose Us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Testimonial from "../components/Testimonial/Testimonial";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    // <Router>
    //  <Navbar />
    //   <>
    //     <Routes>
    //       <Route path="/Home" />

    //       <Route path="/AboutUs" element={<AboutUs />} />

    //       <Route path="/Search" element={<Search/>} />

    //       <Route path="/ChooseUs" element={<ChooseUs />} />

    //       <Route path="/Company" element={<Company />} />

    //       <Route path="/Courses" element={<Courses />} />

    //       <Route path="/Features" element={<Features />} />

    //       <Route path="/FreeCourse" element={<FreeCourse />} />

    //       <Route path="/HeroSection" element={<HeroSection />} />

    //       <Route path="/Testimonial" element={<Testimonial />} />

    //       <Route path="/NewsLetter" element={<NewsLetter />} />
    //     </Routes>
    //   </>
    //   <Footer />
    // </Router>

    <Fragment>
      <Header/>
      {/* <Navbar /> */}
      {/* <Search/> */}
      <HeroSection />
      {/* <Company /> */}
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </Fragment>
  );
};

export default Home;
