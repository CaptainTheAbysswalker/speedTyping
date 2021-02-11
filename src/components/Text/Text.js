import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Text = (props) => {
  const text = useSelector((state) => state.textReducer.text);
  const currentPos = useSelector((state) => state.textReducer.currentPos);

  return (
    <div className="text">
      {text.map((element, index) => {
        if (index === currentPos) {
          return (
            <span className="defaultText currentSymbol" key={index}>
              {element}
            </span>
          );
        } else {
          return (
            <span className="defaultText" key={index}>
              {element}
            </span>
          );
        }
      })}
    </div>
  );
};

export default Text;
