import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./jobs.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../component/redux/action/jobs.action";
import SearchBar from "./SearchJob";

const JobsCard = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllJobs(setLoading));
  }, [dispatch]);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim() === "") {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  };

  return (
    <div className="container mt-4">
      <SearchBar onSearch={handleSearch} />
      <div className="row">
        {filteredJobs.map((job) => (
          <div
            key={job?._id}
            className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3 d-flex justify-content-center"
          >
            <div className="card shadow-sm custom-card">
              <div className="card-body">
                <h3 className="card-title">{job?.title}</h3>
                <p className="card-text">{job?.company}</p>
                <p>Location: {job?.location}</p>
                <p>Description: {job?.description}</p>
              </div>
              <div className="d-flex justify-content-center">
                <Link
                  to={`/apply/${job?.title}/${job?._id}`}
                  className="button-9"
                >
                  Apply
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsCard;
