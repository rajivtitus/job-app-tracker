import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { Container, Glass, Card } from "../styles/styles";
import { fadeIn, scaleIn } from "../animations/animations";
import JobApp from "./JobApp";

const JobApplications = () => {
  const [jobData, setJobData] = useState({});
  const { jobApps } = useSelector((state) => state);
  const { register, handleSubmit, reset } = useForm();

  const submitData = (data) => {
    setJobData(data);
    reset();
  };

  return (
    <Container>
      <StyledJobApps variants={fadeIn} initial="hidden" animate="show">
        <StyledCard className="form-card" variants={scaleIn}>
          <h2 className="form-title">Log Application</h2>
          <form onSubmit={handleSubmit((data) => submitData(data))}>
            <div class="row">
              <label for="job-title">Job Title:</label>
              <input type="text" id="job-title" {...register("jobTitle")} required />
            </div>
            <div class="row">
              <label for="company-name">Company:</label>
              <input type="text" id="company-name" {...register("companyName")} required />
            </div>
            <div class="row">
              <label for="job-description">Job Description:</label>
              <input type="textarea" id="job-description" {...register("jobDescription")} required />
            </div>
            <div class="row">
              <label for="location">Location:</label>
              <input type="text" id="location" {...register("location")} required />
            </div>
            <div class="row">
              <button>Submit</button>
            </div>
          </form>
        </StyledCard>
        <div className="job-apps-container" variants={scaleIn}>
          {jobApps.map((app) => (
            <div key={app._id}>
              <JobApp app={app} />
            </div>
          ))}
        </div>
      </StyledJobApps>
    </Container>
  );
};

export default JobApplications;

const StyledJobApps = styled(Glass)`
  display: flex;
  gap: 1.5rem;
  padding-right: 0rem;

  .form-card {
    flex: 1;
  }
  .job-apps-container {
    flex: 2;
    overflow-y: auto;
  }
  .job-apps-container::-webkit-scrollbar {
    width: 5px;
  }
  .job-apps-container::-webkit-scrollbar-thumb {
    background: darkgray;
    border-radius: 10px;
  }
`;

const StyledCard = styled(Card)`
  .form-title {
    padding: 2rem;
  }
  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: pink;
    .row {
      width: 100%;
    }
  }
`;
