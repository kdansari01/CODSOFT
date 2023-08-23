import React from "react";
import { JobData } from "../Data";
import { useNavigate } from "react-router-dom";
import "./style.css";

const JobCategories = () => {
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    navigate(`/jobs/${category}`);
  };

  return (
    <section className="ag-format-container ">
      <div className="">
        <h2 className="text-center fw-bold mt-4">Job Categories</h2>
        <div className="ag-courses_box">
          {JobData.map((item) => (
            <div
              key={item.id}
              className="ag-courses_item"
              onClick={() => handleCategoryClick(item.title)}
            >
              <div className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">{item.title}</div>

                <div className="ag-courses-item_date-box">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
