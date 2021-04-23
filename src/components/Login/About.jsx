import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const About = () => {
  return (
    <StlyedAbout>
      <h1>Text here</h1>
    </StlyedAbout>
  );
};

export default About;

const StlyedAbout = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: linear-gradient(315deg, #485461 0%, #28313b 74%);
  z-index: 4;
`;
