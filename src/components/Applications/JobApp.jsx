import React from "react";
import styled from "styled-components";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan, faTrash, faClock, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Card, Button2 } from "../../styles/styles";
import { fadeIn } from "../../animations/animations";
import { deleteJobApp, inactiveJobApp } from "../../actions/jobAppActions";

const JobApp = ({ app }) => {
  const dispatch = useDispatch();
  const today = moment(new Date());
  //Checking whether app is greater than 3 days and outreach has been done?
  const gtThreeDays = Math.round(today.diff(moment(app.createdAt), "days")) >= 3;
  const outreach = app.outreach.length > 0;

  return (
    <>
      <StyledCard variants={fadeIn} initial="hidden" animate="show">
        <header className="card-header">
          <h5>
            <FontAwesomeIcon icon={faClock} color={gtThreeDays && !outreach && app.active ? "orange" : ""} />
            {`${moment(app.createdAt).fromNow()} ${gtThreeDays && !outreach && app.active ? "| Outreach Pending" : ""}`}
          </h5>
          <Link to={`job-apps/${app._id}`}>
            <FontAwesomeIcon icon={faEllipsisH} size="2x" color="black" />
          </Link>
        </header>
        <div className="card-content">
          <h3>{app.jobTitle}</h3>
          <h4>{app.companyName}</h4>
          <h5>{app.location}</h5>
          <p>{app.notes.length > 200 ? `${app.notes.substring(0, 150)}....` : app.notes}</p>
        </div>
        <div className="card-footer">
          {app.active ? (
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
          <div className="card-actions">
            {app.active && (
              <Button2 onClick={() => dispatch(inactiveJobApp(app._id))}>
                <FontAwesomeIcon icon={faBan} color="red" />
                Inactive
              </Button2>
            )}
            <Button2 onClick={() => dispatch(deleteJobApp(app._id))}>
              <FontAwesomeIcon icon={faTrash} color="black" />
              Delete
            </Button2>
          </div>
        </div>
      </StyledCard>
    </>
  );
};

export default JobApp;

const StyledCard = styled(Card)`
  min-height: 15vh;
  margin-bottom: 2rem;

  .card-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.65rem;
  }

  .card-content {
    h3,
    h4,
    h5 {
      margin-bottom: 0.15rem;
    }
    p {
      margin-top: 0.5rem;
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.65rem;
    button {
      margin: 0rem 0.25rem;
    }
  }
`;
