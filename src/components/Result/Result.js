import { React, useEffect } from "react";
import { useSelector } from "react-redux";

import "./result.css";

const Result = (props) => {
  const time = useSelector((state) => state.textReducer.timer);
  const currentPos = useSelector((state) => state.textReducer.currentPos);
  const mistakes = useSelector((state) => state.textReducer.mistakes);

  useEffect(() => {
    clearInterval(props.id.current);
  }, []);

  return (
    <div className="modal">
      <div className="result">
        <h2>Your Final Results</h2>
        <div className="resultsBlock">
          <div className="resultElement">
            Accuracy: {`${100 - Math.round(100 / currentPos) * mistakes} %`}
          </div>
          <div className="resultElement">
            Speed: {`${Math.round((currentPos / time) * 60)} s/m`}
          </div>
        </div>
        <button className="button">Try again</button>
      </div>
    </div>
  );
};

export default Result;
