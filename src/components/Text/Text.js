import { React } from "react";
import { useSelector } from "react-redux";

const Text = (props) => {
  const text = useSelector((state) => state.textReducer.text);
  const currentPos = useSelector((state) => state.textReducer.currentPos);
  const isSucces = useSelector((state) => state.textReducer.succes);

  return (
    <div className="text">
      {text.map((element, index) => {
        if (index === currentPos) {
          return (
            <span
              className={
                isSucces ? "defaultText currentSymbol" : "defaultText mistake"
              }
              key={index}
            >
              {element}
            </span>
          );
        } else {
          return (
            <span
              className={
                index < currentPos ? "defaultText succes" : "defaultText"
              }
              key={index}
            >
              {element}
            </span>
          );
        }
      })}
    </div>
  );
};

export default Text;
