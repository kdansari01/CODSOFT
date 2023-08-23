import React from "react";
import { Link, useParams } from "react-router-dom";
import { JobDataByCategory } from "../component/JobsDataByCategory";
import "./jobsPage.css";
import { useSelector } from "react-redux";
import LoginPage from "../component/registerAndLoging/LoginPage";
const JobsPage = () => {
  const getUser = useSelector((state) => state.user.user);

  const { category } = useParams();

  const jobsForCategory = JobDataByCategory[category] || [];

  return (
    <div className="container mt-4">
      <h2 className="section__title">Jobs in {category}</h2>
      <div className="row">
        {jobsForCategory.map((job) => (
          <div
            key={job.id}
            className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3 d-flex justify-content-center"
          >
            <div className="card shadow-sm custom-card">
              <div className="card-body">
                <h3 className="card-title">{job.title}</h3>
                <p className="card-text">{job.description}</p>
                <p>Salary: {job.salary}</p>
                <p>Location: {job.location}</p>
                <p>Experience Required: {job.experienceRequired}</p>
                <p>Key Responsibilities: {job.keyResponsibilities}</p>
                <p>Education: {job.education}</p>
                <p>Minimum Qualifications: {job.minimumQualifications}</p>
                <p>Employment Type: {job.employmentType}</p>
                <p>Must Skills: {job.mustSkills}</p>
              </div>
              <div className="d-flex justify-content-center">
                {getUser ? (
                  <Link
                    to={`/jobs/${job.title}/${job.id}`}
                    className="button-9"
                  >
                    Apply
                  </Link>
                ) : (
                  <LoginPage />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
