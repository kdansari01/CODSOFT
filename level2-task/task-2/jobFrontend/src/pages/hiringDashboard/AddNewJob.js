import React, { useState } from "react";
import "./newJob.css";
import { useDispatch } from "react-redux";
import { createJob } from "../../component/redux/action/jobs.action";
import { useNavigate } from "react-router-dom";

function JobPosting() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createJob(formData, setLoading, navigate));
  };
  if (loading) return "...Loading";
  return (
    <div className="container">
      <div className="title">Add New Post</div>
      <form onSubmit={handleSubmit} action="#">
        <div className="user__details">
          <div className="input__box">
            <span className="details">Title</span>
            <input
              name="title"
              onChange={handleInputChange}
              value={formData.title}
              type="text"
              placeholder="role..."
              required
            />
          </div>
          <div className="input__box">
            <span className="details">Company</span>
            <input
              name="company"
              value={formData.company}
              type="text"
              placeholder="enter company name..."
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="input__box">
            <span className="details">location</span>
            <input
              type="text"
              placeholder="Enter location .."
              required
              name="location"
              onChange={handleInputChange}
              value={formData.location}
            />
          </div>
          <div className="input__box">
            <span className="details">Description</span>
            <input
              type="text"
              placeholder="description"
              required
              name="description"
              inputMode="Numeric"
              onChange={handleInputChange}
              value={formData.description}
            />
          </div>
        </div>

        <div className="button">
          <button type="submit"> Submit</button>
        </div>
      </form>
    </div>
  );
}

export default JobPosting;
