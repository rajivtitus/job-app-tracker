import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import ActivityList from "./ActivityList";
import { Button1, Button2, Container, Card, Select } from "../../styles/styles";
import { fadeIn } from "../../animations/animations";
import { updateJobApp } from "../../actions/jobAppActions";

const JobAppDetails = () => {
  const { pathname } = useLocation();
  const jobId = pathname.split("/")[2];
  const jobApp = useSelector((state) => state.jobApps.filter((jobApp) => jobApp._id === jobId))[0];
  const [logCall, setLogCall] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submitData = (activityData) => {
    dispatch(updateJobApp(jobId, activityData));
    reset();
  };

  return (
    <StyledContainer>
      {jobApp && (
        <StyledCard>
          <div className="card-header">
            <Link to="/job-apps">
              <Button2>Go Back</Button2>
            </Link>
            {jobApp.active ? (
              <h5>
                <FontAwesomeIcon icon={faCheck} color="green" />
                Active
              </h5>
            ) : (
              <h5>
                <FontAwesomeIcon icon={faBan} color="Red" />
                Inactive
              </h5>
            )}
          </div>
          <div className="card-content">
            <h2>{jobApp.jobTitle}</h2>
            <h3>{jobApp.companyName}</h3>
            <h5>{jobApp.location}</h5>
            <h5>Date Applied: {moment(jobApp.createdAt).format("YYYY-MM-DD")}</h5>
            <p>{jobApp.notes}</p>
            <div className="current-activities">
              <ActivityList outreach={jobApp.outreach} />
            </div>
          </div>
          <div className="card-actions">
            {!logCall && jobApp.active && (
              <Button1 onClick={() => setLogCall((prevState) => !prevState)}>Log Activity</Button1>
            )}

            {logCall && (
              <motion.div className="log-activity" variants={fadeIn} initial="hidden" animate="show">
                <Button2 className="close-btn" onClick={() => setLogCall((prevState) => !prevState)}>
                  <FontAwesomeIcon icon={faTimes} />
                </Button2>
                <form onSubmit={handleSubmit(submitData)} autoComplete="off">
                  <div className="row">
                    <div className="column">
                      <label htmlFor="activity">Activity Type:</label>
                      <Select name="activity" id="activity" {...register("activityType")}>
                        <option value="call">Call</option>
                        <option value="email">Email</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="other">Other</option>
                      </Select>
                    </div>
                    <div className="column">
                      <label>Comments:</label>
                      <textarea placeholder="Enter message here" {...register("message")} required />
                    </div>
                  </div>
                  <Button1 type="submit">Log</Button1>
                </form>
              </motion.div>
            )}
          </div>
        </StyledCard>
      )}
    </StyledContainer>
  );
};

export default JobAppDetails;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  width: 75%;
  height: 75vh;
  overflow-y: auto;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  .card-content {
    h2,
    h3,
    h5 {
      margin-bottom: 0.15rem;
    }
    p {
      margin-top: 0.75rem;
    }
  }

  .current-activities {
    margin: 1rem 0rem;
  }

  .card-actions {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .log-activity {
    width: 90%;
    position: relative;
    text-align: center;
    textarea {
      width: 22.5rem;
      height: 12.5rem;
      border: 1px solid black;
      resize: none;
    }
  }
  .row {
    display: flex;
    justify-content: space-evenly;
    padding: 3.5rem 0rem;
    text-align: left;
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    select {
      border: 1px solid black;
    }
  }

  .close-btn {
    background: none;
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (max-width: 536px) {
    height: 90vh;
    width: 100%;
    .row {
      flex-direction: column;
      gap: 1.5rem;
      textarea {
        width: 20rem;
      }
    }
  }
`;