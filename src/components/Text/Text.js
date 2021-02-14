import { React } from "react";
import { Jumbotron, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

const Text = (props) => {
  const text = useSelector((state) => state.textReducer.text);
  const currentPos = useSelector((state) => state.textReducer.currentPos);
  const isSucces = useSelector((state) => state.textReducer.succes);

  return (
    <Jumbotron>
      {text.map((element, index) => {
        if (index === currentPos) {
          return (
            <Alert
              key={index}
              variant={isSucces ? "info" : "danger"}
              style={{ display: "inline", padding: 0, fontSize: "20px" }}
            >
              {element}
            </Alert>
          );
        } else {
          return (
            <Alert
              key={index}
              variant={index < currentPos ? "success" : ""}
              style={{
                display: "inline",
                padding: 0,
                fontSize: "20px",
                border: 0,
                borderRadius: 0,
              }}
            >
              {element}
            </Alert>
          );
        }
      })}
    </Jumbotron>
  );
};

export default Text;
