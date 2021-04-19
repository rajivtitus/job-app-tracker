import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { Button1, Container, Card, Select } from "../../styles/styles";
import { fadeIn } from "../../animations/animations";
import { createJobApp } from "../../actions/jobAppActions";
import JobApp from "./JobApp";

const JobApplications = () => {
  const { jobApps } = useSelector((state) => state);
  const [filterType, setFilterType] = useState("none");
  const [sortType, setSortType] = useState("recent");
  const [filteredJobApps, setFilteredJobApps] = useState([]);
  const [sortedJobApps, setSortedJobApps] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submitData = (jobData) => {
    dispatch(createJobApp(jobData));
    reset();
  };

  const filterJobApps = (filterType, jobApps) => {
    if (filterType === "none") {
      const allApps = [...jobApps];
      setFilteredJobApps(allApps);
    } else if (filterType === "active") {
      const activeApps = jobApps.filter((app) => app.active);
      setFilteredJobApps(activeApps);
    } else if (filterType === "inactive") {
      const inactiveApps = jobApps.filter((app) => !app.active);
      setFilteredJobApps(inactiveApps);
    }
  };

  const sortJobApps = (sortType, filteredJobApps) => {
    if (sortType === "recent") {
      const recentApps = [...filteredJobApps].sort((app1, app2) => moment(app2.createdAt) - moment(app1.createdAt));
      setSortedJobApps(recentApps);
    } else if (sortType === "older") {
      const olderApps = [...filteredJobApps].sort((app1, app2) => moment(app1.createdAt) - moment(app2.createdAt));
      setSortedJobApps(olderApps);
    }
  };

  useEffect(() => {
    filterJobApps(filterType, jobApps);
  }, [filterType, jobApps]);

  useEffect(() => {
    sortJobApps(sortType, filteredJobApps);
  }, [sortType, filteredJobApps]);

  return (
    <StyledContainer variants={fadeIn} initial="hidden" animate="show">
      <StyledFormCard className="form-card">
        <h2>Application Details</h2>
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
          <div className="dropdown">
            <label htmlFor="sort">Sort: </label>
            <Select name="sort" id="sort" onChange={(e) => setSortType(e.target.value)}>
              <option value="recent">Recent</option>
              <option value="older">Older</option>
            </Select>
          </div>
          <div className="dropdown">
            <label htmlFor="filter">Filter: </label>
            <Select name="filter" id="filter" onChange={(e) => setFilterType(e.target.value)}>
              <option value="none">None</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
          </div>
        </div>
        {sortedJobApps.map((app) => (
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
    border-bottom: 1px solid #475360;
  }
  .dropdown {
    margin-bottom: 0.75rem;
  }
`;

const StyledFormCard = styled(Card)`
  max-height: 45rem;
  max-width: 30rem;

  h2 {
    padding: 1rem 0rem;
    text-align: center;
  }
  form {
    padding: 0rem 2.5rem;
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
  }

  .row {
    margin: 1rem 0rem;
  }

  .btn-container {
    text-align: center;
  }
`;
