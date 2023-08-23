import React from "react";
import "./heroHeader.css";
import Typewriter from "typewriter-effect";

const HeroHeader = () => {
  const handleScrollToJobCategories = () => {
    const jobCategoriesSection = document.getElementById("job-categories");
    jobCategoriesSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mainHeroSection">
      <div className="row flow align-items-center">
        <div className="col-lg-6 col-md-6 col-12 text-center">
          <h1 className="hero__title">
            Explore High Profile Job
            <span className="text-danger"> Openings</span>
          </h1>
          <p className="hero__subtitle">
            <span className="text-info">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineers",
                    "Product Managers",
                    "Data Scientists",
                    "and more!!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <div
            onClick={handleScrollToJobCategories} // Call the scroll function on button click
          >
            <lord-icon
              src="https://cdn.lordicon.com/rxufjlal.json"
              trigger="boomerang"
              state="hover-1"
              style={{ width: "70px", height: "70px", cursor: "pointer" }}
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6 d-none d-md-block">
          <div className="section__img justify-content-center d-flex align-items-center">
            <img
              style={{ width: "70%" }}
              src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
              alt="aa"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
