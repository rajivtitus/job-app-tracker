import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan, faTrash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container, Card } from "../../styles/styles";

const JobAppDetails = () => {
  const { pathname } = useLocation();
  const jobId = pathname.split("/")[2];
  const jobDetails = useSelector((state) => state.jobApps.filter((jobApp) => jobApp._id === jobId))[0];
  const [logCall, setLogCall] = useState(false);

  return (
    <StyledContainer>
      <StyledCard>
        <div className="card-header">
          <Link to="/job-apps">
            <button>Go Back</button>
          </Link>
          <h5>
            <FontAwesomeIcon icon={faCheck} color="green" />
            {jobDetails?.status}
          </h5>
        </div>
        <div className="card-content">
          <h2>{jobDetails?.jobTitle}</h2>
          <h3>{jobDetails?.companyName}</h3>
          <h5>{jobDetails?.location}</h5>
          <p>{jobDetails?.notes}</p>
        </div>
        <div className="card-actions">
          {!logCall && <button onClick={() => setLogCall((prevState) => !prevState)}>Log Activity</button>}
        </div>
        {logCall && (
          <div className="log-activity">
            <button onClick={() => setLogCall((prevState) => !prevState)}>
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
            <label htmlFor="activity">Activity Type:</label>
            <select name="cars" id="cars">
              <option value="call">Call</option>
              <option value="email">Email</option>
              <option value="linkedin">LinkedIn</option>
              <option value="other">Other</option>
            </select>
            <label>Activity Notes:</label>
            <textarea></textarea>
            <button>Submit</button>
          </div>
        )}
      </StyledCard>
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
    margin-bottom: 1.75rem;
    button {
      background: none;
      border: 1px solid transparent;
      &:hover {
        border: 1px solid gray;
      }
    }
  }

  .card-actions {
    text-align: center;
    button {
      min-width: 8.5rem;
      padding: 1rem 1.5rem;
      margin: 0.75rem 0rem;
      background: #323c47;
      color: white;
    }
  }
`;
