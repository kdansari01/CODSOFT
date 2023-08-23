import React from "react";
import JobsCard from "./jobsCard";
import Navbar from "../../component/Navbar";

const Jobs = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <JobsCard />
      </div>
    </div>
  );
};

export default Jobs;
