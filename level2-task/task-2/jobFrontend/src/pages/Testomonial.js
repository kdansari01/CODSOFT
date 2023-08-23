import React from "react";
import { TestimonialData } from "../Data";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
export const Testomonial = () => {
  return (
    <>
      <div>
        <section className="job-categories">
          <div className="container">
            <p>DON'T JUST TAKE IT FROM US</p>
            <h1 className="section__title">From our users</h1>
            <div className="row">
              {TestimonialData.map((item) => (
                <div
                  key={item.id}
                  className="col-lg-6 col-md-6 col-12 mt-3 mb-3"
                >
                  <div
                    className="job-category"
                    style={{ width: "auto", height: "250px" }}
                  >
                    <h1 className="text-start fw-bold">
                      <BiSolidQuoteAltLeft />
                    </h1>
                    <p className="job-category__description fs-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
