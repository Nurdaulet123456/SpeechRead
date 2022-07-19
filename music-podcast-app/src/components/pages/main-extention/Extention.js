import React, { useState, useEffect } from "react";

import MainBlock from "./explanation-main-block/Main.Block";
import Explanation from "./explanation/Explanation";
import ExplanationBlock from "./explanation-block/ExplanationBlock";
import ScrollTo from "../../scrollTo/ScrollTo";
import GetStarted from "./getStarted/GetStarted";

const Extention = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <MainBlock />
      <Explanation />
      <ExplanationBlock />
      <GetStarted />
      {showTopBtn && <ScrollTo click={goToTop} />}
    </>
  );
};

export default Extention;
