import { React } from "react";
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
      <div>{mathAccuracy()}</div>
    </div>
  );
};

export default Mistakes;
