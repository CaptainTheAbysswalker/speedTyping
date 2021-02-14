import { useCallback, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Result from "./components/Result/Result";
import Stats from "./components/Stats/Stats";
import Text from "./components/Text/Text";
import { getText } from "./functions/getText";
import { INCREASETIMER, REPLACE, RUNTIMER } from "./redux/types";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const isLoaded = useSelector((state) => state.stateReducer.isLoaded);
  let timerId = useRef(0);
  const textLength = useSelector((state) => state.textReducer.text.length);
  const currentPos = useSelector((state) => state.textReducer.currentPos);

  const generator = useCallback(() => {
    document.addEventListener(
      "keypress",
      () => {
        dispatch({ type: RUNTIMER });
        let counter = 0;
        timerId.current = setInterval(() => {
          counter++;
          dispatch({ type: INCREASETIMER, payload: counter });
        }, 1000);
        console.log(timerId);
      },
      { once: true }
    );
  }, []);

  const dispatch = useDispatch();

  const checkSymbol = (key) => {
    dispatch({ type: RUNTIMER });
    dispatch({ type: REPLACE, payload: key });
  };

  useEffect(() => {
    getText(dispatch);
    document.addEventListener("keypress", (event) => {
      checkSymbol(event.key);
    });
    generator();

    return () => {
      document.removeEventListener("keypress", (event) => {
        checkSymbol(event.key);
      });
    };
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={8}>
            {isLoaded && <Text />}
            {!isLoaded && <Loader />}
          </Col>
          <Col>
            <Stats />
          </Col>
        </Row>
      </Container>

      {textLength === currentPos && <Result id={timerId} timer={generator} />}

      <footer>
        <a href="https://captaintheabysswalker.github.io/card/" target="blank">
          @CaptainTheAbysswalker
        </a>
      </footer>
    </div>
  );
}

export default App;
