import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getText } from "../../functions/getText";
import { TRYAGAIN } from "../../redux/types";

import "./result.css";

const Result = (props) => {
  const time = useSelector((state) => state.textReducer.timer);
  const currentPos = useSelector((state) => state.textReducer.currentPos);
  const mistakes = useSelector((state) => state.textReducer.mistakes);
  const dispatch = useDispatch();

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
        <button
          className="button"
          onClick={() => {
            dispatch({ type: TRYAGAIN });
            getText(dispatch);
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default Result;
