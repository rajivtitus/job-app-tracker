import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div className="activity-type" onClick={() => setToggle((prevToggle) => !prevToggle)} layout>
      <h4>{title}</h4>
      {toggle && children}
      <div className="line" />
    </motion.div>
  );
};

export default Toggle;
