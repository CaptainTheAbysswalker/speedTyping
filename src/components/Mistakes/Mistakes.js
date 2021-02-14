import { React } from "react";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

import "./mistakes.css";

const Mistakes = () => {
  const currentPos = useSelector((state) => state.textReducer.currentPos);
  const mistakes = useSelector((state) => state.textReducer.mistakes);

  const mathAccuracy = () => {
    if (currentPos === 0 || 100 - Math.round(100 / currentPos) * mistakes < 0) {
      return `0%`;
    } else {
      return `${100 - Math.round(100 / currentPos) * mistakes} %`;
    }
  };

  return (
    <div className="mistakeCounter">
      <h3>Accuracy</h3>
      {mathAccuracy()}
      <ProgressBar
        now={100 - Math.round(100 / currentPos) * mistakes}
        style={{ width: "122px" }}
      />
    </div>
  );
};

export default Mistakes;
