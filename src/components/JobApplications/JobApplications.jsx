import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import { Container, Card } from "../../styles/styles";
import { fadeIn, scaleIn } from "../../animations/animations";
import { createJobApp } from "../../actions/jobAppActions";
import JobApp from "./JobApp";

const JobApplications = () => {
  const { jobApps } = useSelector((state) => state);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submitData = (jobData) => {
    dispatch(createJobApp(jobData));
    reset();
  };

  return (
    <StyledContainer variants={fadeIn} initial="hidden" animate="show">
      <StyledFormCard className="form-card">
        <form onSubmit={handleSubmit(submitData)} autoComplete="off">
          <h2 className="form-title">Application Details</h2>
          <div className="row">
            <label htmlFor="job-title">Job Title:</label>
            <input type="text" id="job-title" {...register("jobTitle")} required />
          </div>
          <div className="row">
            <label htmlFor="company-name">Company:</label>
            <input type="text" id="company-name" {...register("companyName")} required />
          </div>
          <div className="row">
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" {...register("location")} required />
          </div>
          <div className="row">
            <label htmlFor="notes">Notes:</label>
            <textarea id="notes" {...register("notes")} required />
          </div>
          <div className="row btn-container">
            <button>Submit</button>
          </div>
        </form>
      </StyledFormCard>
      <div className="job-apps-container">
        {jobApps.map((app) => (
          <div key={app._id}>
            <JobApp app={app} />
          </div>
        ))}
      </div>
    </StyledContainer>
  );
};

export default JobApplications;

const StyledContainer = styled(Container)`
  display: flex;
  gap: 2rem;

  .form-card {
    flex: 1;
  }
  .job-apps-container {
    flex: 2;
    height: 90vh;
    max-width: 60rem;
    overflow-y: auto;
  }
  .job-apps-container::-webkit-scrollbar {
    width: 10px;
  }
  .job-apps-container::-webkit-scrollbar-thumb {
    background: #475360;
    border-radius: 10px;
  }
`;

const StyledFormCard = styled(Card)`
  max-height: 45rem;
  max-width: 30rem;
  form {
    padding: 0rem 3rem;
  }
  .form-title {
    padding: 1rem 0rem;
    text-align: center;
  }
  .row {
    margin: 1rem 0rem;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    background: #bbb8bc;
    margin-top: 0.25rem;
  }
  textarea {
    height: 10rem;
    resize: none;
  }
  .btn-container {
    text-align: center;
  }
  button {
    min-width: 8.5rem;
    padding: 1rem 1.5rem;
    margin: 0.75rem 0rem;
    background: #323c47;
    color: white;
  }
`;
