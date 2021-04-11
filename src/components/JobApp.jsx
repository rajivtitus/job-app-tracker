import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import { Card } from "../styles/styles";
import { scaleIn } from "../animations/animations";
import { deleteJobApp } from "../actions/jobAppActions";

const JobApp = ({ app }) => {
  const dispatch = useDispatch();

  return (
    <>
      <StyledCard variants={scaleIn} initial="hidden" animate="show">
        <header className="card-header">
          <h5>
            <FontAwesomeIcon icon={faCheck} color="green" />
            {app.status} status
          </h5>
        </header>
        <div className="card-content">
          <h2>{app.jobTitle}</h2>
          <h3>{app.companyName}</h3>
          <p>{app.jobDescription}</p>
        </div>
        <div className="card-actions">
          <button>
            <FontAwesomeIcon icon={faBan} color="red" />
            Mark Inactive
          </button>
          <button onClick={() => dispatch(deleteJobApp(app._id))}>
            <FontAwesomeIcon icon={faTrash} color="black" />
            Delete
          </button>
        </div>
      </StyledCard>
    </>
  );
};

export default JobApp;

const StyledCard = styled(Card)`
  min-height: 15vh;
  padding: 1rem;
  margin-bottom: 2rem;
  margin-right: 1.5rem;

  svg {
    margin: 0rem 0.35rem;
  }

  .card-header {
    display: flex;
    justify-content: flex-end;
    h5 {
      text-transform: capitalize;
      color: #949393;
    }
  }

  .card-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    button {
      margin: 0rem 0.5rem;
      padding: 0.5rem;
      background: none;
      cursor: pointer;
      &:hover {
        border: 1px solid gray;
      }
    }
  }
`;
