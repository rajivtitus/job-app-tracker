import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Button1, Button2, Container, Card } from "../../styles/styles";

const JobAppDetails = () => {
  const { pathname } = useLocation();
  const jobId = pathname.split("/")[2];
  const jobDetails = useSelector((state) => state.jobApps.filter((jobApp) => jobApp._id === jobId))[0];
  const [logCall, setLogCall] = useState(false);

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
            <h3>{jobDetails.jobTitle}</h3>
            <h4>{jobDetails.companyName}</h4>
            <h5>{jobDetails.location}</h5>
            <p>{jobDetails.notes}</p>
          </div>
          <div className="card-actions">
            {!logCall && (
              <Button1 disabled={!jobDetails.active} onClick={() => setLogCall((prevState) => !prevState)}>
                Log Activity
              </Button1>
            )}
          </div>
          {logCall && (
            <div className="log-activity">
              <button onClick={() => setLogCall((prevState) => !prevState)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <form>
                <label htmlFor="activity">Activity Type:</label>
                <select name="activity" id="activity">
                  <option value="call">Call</option>
                  <option value="email">Email</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="other">Other</option>
                </select>
                <label>Activity Notes:</label>
                <textarea></textarea>
                <Button1 type="submit">Log</Button1>
              </form>
            </div>
          )}
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
  }
`;
