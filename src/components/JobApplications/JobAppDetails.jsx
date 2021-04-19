import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { Button1, Button2, Container, Card, Select } from "../../styles/styles";
import { fadeIn } from "../../animations/animations";

const JobAppDetails = () => {
  const { pathname } = useLocation();
  const jobId = pathname.split("/")[2];
  const jobDetails = useSelector((state) => state.jobApps.filter((jobApp) => jobApp._id === jobId))[0];
  const [logCall, setLogCall] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submitData = (activityData) => {
    // dispatch(createJobApp(activityData));
    reset();
  };

  return (
    <StyledContainer>
      {jobDetails && (
        <StyledCard>
          <div className="card-header">
            <Link to="/job-apps">
              <Button2>Go Back</Button2>
            </Link>
            {jobDetails.active ? (
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
            <h2>{jobDetails.jobTitle}</h2>
            <h3>{jobDetails.companyName}</h3>
            <h4>{jobDetails.location}</h4>
            <p>{jobDetails.notes}</p>
          </div>
          <div className="card-actions">
            {!logCall && (
              <Button1 disabled={!jobDetails.active} onClick={() => setLogCall((prevState) => !prevState)}>
                Log Activity
              </Button1>
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

  .card-actions {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .log-activity {
    width: 75%;
    position: relative;
    text-align: center;
    textarea {
      width: 30rem;
      height: 10rem;
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
`;
