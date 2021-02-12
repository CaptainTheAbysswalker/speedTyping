import { React } from "react";
import Mistakes from "../Mistakes/Mistakes";
import Speed from "../Speed/Speed";

import "./stats.css";

const Stats = () => {
  return (
    <div className="stats">
      <h3>Stats</h3>
      <Mistakes />
      <Speed />
    </div>
  );
};

export default Stats;
