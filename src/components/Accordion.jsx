import React from "react";

// Compound Component w/ AccordionItem
const Accordion = ({ className, children }) => {
  return <ul className={className}>{children}</ul>;
};

export default Accordion;
