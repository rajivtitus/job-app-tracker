import React from "react";

import { Container, Glass } from "../styles/styles";
import { fadeIn, scaleIn } from "../animations/animations";

const Favorites = () => {
  return (
    <Container>
      <Glass variants={fadeIn} initial="hidden" animate="show">
        <h1>Favorites</h1>
      </Glass>
    </Container>
  );
};

export default Favorites;
