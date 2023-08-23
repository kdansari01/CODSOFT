import React from "react";
import Companies from "./Companies";
import JobCategories from "./JobCategory";
import { Testomonial } from "./Testomonial";

import "./Home.css";
import HeroHeader from "./HeroHeader";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <HeroHeader />
        </div>

        <div id="job-categories" className="job-category-item">
          <JobCategories />
        </div>
        <div className="company-item">
          <Companies />
        </div>
        <div className="testimonial-item">
          <Testomonial />
        </div>
      </div>
    </>
  );
};

export default Home;
