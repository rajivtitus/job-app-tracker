import React from "react";

import { Container } from "../styles/styles";
import { fadeIn } from "../animations/animations";

const Favorites = () => {
  return (
    <Container variants={fadeIn} initial="hidden" animate="show">
      <h2>Favorites</h2>
    </Container>
  );
};

export default Favorites;
