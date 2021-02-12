import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Result from "./components/Result/Result";
import Stats from "./components/Stats/Stats";
import Text from "./components/Text/Text";
import { getText } from "./functions/getText";
import { INCREASETIMER, REPLACE, RUNTIMER } from "./redux/types";

function App() {
  const isLoaded = useSelector((state) => state.stateReducer.isLoaded);
  const isRun = useSelector((state) => state.stateReducer.isRun);
  const timerId = useRef(0);
  const textLength = useSelector((state) => state.textReducer.text.length);
  const currentPos = useSelector((state) => state.textReducer.currentPos);

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
    document.addEventListener(
      "keypress",
      () => {
        if (!isRun) {
          dispatch({ type: RUNTIMER });
          let counter = 0;
          timerId.current = setInterval(() => {
            counter++;
            dispatch({ type: INCREASETIMER, payload: counter });
          }, 1000);
        }
      },
      { once: true }
    );
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener("keypress", (event) => {
        checkSymbol(event.key);
      });
    };
  }, []);
  return (
    <div className="App">
      <Stats />
      {textLength === currentPos && <Result id={timerId} />}
      {isLoaded && <Text />}
      {!isLoaded && <Loader />}
    </div>
  );
}

export default App;
