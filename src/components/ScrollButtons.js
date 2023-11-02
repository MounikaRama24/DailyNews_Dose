// ScrollButtons.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButtons = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-buttons">
      <button className="btn btn-dark" onClick={handleScrollToTop}>
        <FontAwesomeIcon icon={faArrowCircleUp} /> Scroll To Top
      </button>
    </div>
  );
};

export default ScrollButtons;
