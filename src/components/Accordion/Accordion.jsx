import React, { createContext, useContext, useState } from "react";
import AccordionContent from "./AccordionContent.jsx";
import AccordionItem from "./AccordionItem.jsx";
import AccordionTitle from "./AccordionTitle.jsx";

const AccordionContext = createContext();

export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "Accordion related components must be wrapped by Accordiong component"
    );
  }

  return ctx;
};

// Compound Component Base
const Accordion = ({ className, children }) => {
  const [openItemId, setOpenItemId] = useState();

  const toggleItem = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

export default Accordion;
