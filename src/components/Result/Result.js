import { React, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getText } from "../../functions/getText";
import { TRYAGAIN } from "../../redux/types";

const Result = (props) => {
  const time = useSelector((state) => state.textReducer.timer);
  const currentPos = useSelector((state) => state.textReducer.currentPos);
  const mistakes = useSelector((state) => state.textReducer.mistakes);
  const dispatch = useDispatch();
  const textLength = useSelector((state) => state.textReducer.text.length);

  useEffect(() => {
    clearInterval(props.id.current);

    return () => {
      props.timer();
    };
  }, []);

  return (
    <Modal show={textLength === currentPos} onHide={() => {}}>
      <Modal.Header>
        <Modal.Title>Your Final Results</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p> Accuracy: {`${100 - Math.round(100 / currentPos) * mistakes} %`}</p>
        <p>Speed: {`${Math.round((currentPos / time) * 60)} s/m`}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            dispatch({ type: TRYAGAIN });
            getText(dispatch);
          }}
        >
          Try again
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Result;
