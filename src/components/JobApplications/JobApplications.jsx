import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import { Container, Glass, Card } from "../../styles/styles";
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
    <Container>
      <StyledJobApps variants={fadeIn} initial="hidden" animate="show">
        <StyledCard className="form-card" variants={scaleIn}>
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
              <button>Log</button>
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
    padding-bottom: 0.5rem;
    text-align: center;
  }
  form {
    height: 100%;
    max-width: 450px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .row {
      width: 60%;
      margin: 0 auto;
    }
    .btn-container {
      text-align: center;
    }
    label {
      display: block;
      padding-bottom: 0.5rem;
    }
    input,
    textarea {
      background: #ccc4f8;
      width: 100%;
    }
    textarea {
      height: 6rem;
      resize: none;
    }
    button {
      border: none;
      background: #ccc4f8;
      min-width: 7.5rem;
      padding: 0.75rem 1.5rem;
      margin-bottom: 1rem;
      border-radius: 1rem;
      font-size: 1rem;
      transition: all 0.5s ease-out;
      &:hover {
        background: #aaa0f4;
      }
    }
  }
`;
