import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import { Button1, Container, Card } from "../../styles/styles";
import { fadeIn } from "../../animations/animations";
import { createJobApp } from "../../actions/jobAppActions";
import JobApp from "./JobApp";

const JobApplications = () => {
  const { jobApps } = useSelector((state) => state);
  const [sortType, setSortType] = useState("");
  const [filterType, setFilterType] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submitData = (jobData) => {
    dispatch(createJobApp(jobData));
    reset();
  };

  return (
    <StyledContainer variants={fadeIn} initial="hidden" animate="show">
      <StyledFormCard className="form-card">
        <h2 className="form-title">Application Details</h2>
        <form onSubmit={handleSubmit(submitData)} autoComplete="off">
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
            <Button1>Submit</Button1>
          </div>
        </form>
      </StyledFormCard>
      <div className="job-apps-container">
        <div className="toolbar">
          <div className="sort">
            <label htmlFor="sort">Sort: </label>
            <select name="sort" id="sort">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor="filter">Filter: </label>
            <select name="filter" id="filter">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
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
    padding-right: 1.75rem;
    overflow-y: auto;
  }
  .job-apps-container::-webkit-scrollbar {
    width: 7px;
  }
  .job-apps-container::-webkit-scrollbar-thumb {
    background: #6a7a8b;
    border-radius: 5px;
    &:hover {
      background: #475360;
    }
  }
  .job-apps-container::-webkit-scrollbar-track {
    background: white;
    border-radius: 5px;
  }

  .toolbar {
    display: flex;
    justify-content: flex-end;
    gap: 1.5rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid #475360;
  }
  .sort,
  .filter {
    margin-bottom: 0.75rem;
  }
`;

const StyledFormCard = styled(Card)`
  max-height: 45rem;
  max-width: 30rem;
  margin-top: 2.5rem;

  .form-title {
    padding: 1rem 0rem;
    text-align: center;
  }
  form {
    padding: 0rem 2.5rem;
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
`;
