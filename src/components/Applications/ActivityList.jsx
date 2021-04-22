import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";

import Toggle from "./Toggle";

const ActivityList = ({ outreach }) => {
  const [calls, emails, linkedin, others] = [[], [], [], []];

  outreach.forEach((item) => {
    switch (item.activityType) {
      case "call":
        calls.push(item);
        break;

      case "email":
        emails.push(item);
        break;

      case "linkedin":
        linkedin.push(item);
        break;

      case "other":
        others.push(item);
        break;

      default:
        break;
    }
  });

  return (
    <StyledActivityList>
      <h3>Outreach Activites ({outreach.length})</h3>
      <AnimateSharedLayout type="crossfade">
        {calls.length ? (
          <Toggle title={`Call (${calls.length})`}>
            {calls.map((call, index) => (
              <div key={index} className="activity">
                <h5>Call {index + 1}:</h5>
                <p>{call.message}</p>
              </div>
            ))}
          </Toggle>
        ) : null}

        {emails.length ? (
          <Toggle title={`Email (${emails.length})`}>
            {emails.map((email, index) => (
              <div key={index} className="activity">
                <h5>Email {index + 1}:</h5>
                <p>{email.message}</p>
              </div>
            ))}
          </Toggle>
        ) : null}

        {linkedin.length ? (
          <Toggle title={`LinkedIn Mail (${linkedin.length})`}>
            {linkedin.map((item, index) => (
              <div key={index} className="activity">
                <h5>Mail {index + 1}:</h5>
                <p>{item.message}</p>
              </div>
            ))}
          </Toggle>
        ) : null}

        {others.length ? (
          <Toggle title={`Other (${others.length})`}>
            {others.map((other, index) => (
              <div key={index} className="activity">
                <h5>Other {index + 1}:</h5>
                <p>{other.message}</p>
              </div>
            ))}
          </Toggle>
        ) : null}
      </AnimateSharedLayout>
    </StyledActivityList>
  );
};

export default ActivityList;

const StyledActivityList = styled(motion.div)`
  margin-top: 1.5rem;

  .activity-type {
    cursor: pointer;
    margin-top: 1.5rem;
    margin-bottom: 3.5rem;
    h4 {
      padding: 0.5rem 0rem;
      font-weight: 600;
    }
  }

  .activity {
    margin: 1.25rem 0rem;
    p {
      margin: 0;
    }
  }

  .line {
    height: 2px;
    background: #475360;
    margin-bottom: 2rem;
  }
`;
