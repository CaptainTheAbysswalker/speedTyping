import { React } from "react";
import { useSelector } from "react-redux";

import "./speed.css";

const Speed = () => {
  const time = useSelector((state) => state.textReducer.timer);
  const currentPos = useSelector((state) => state.textReducer.currentPos);

  const mathSpeed = () => {
    if (currentPos === 0 || time === 0) {
      return `0 s/m`;
    } else {
      return `${Math.round((currentPos / time) * 60)} s/m`;
    }
  };

  return (
    <div className="speedCounter">
      <h3>Speed</h3>
      <div>{mathSpeed()}</div>
    </div>
  );
};

export default Speed;
