import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Text from "./components/Text/Text";
import { getText } from "./functions/getText";
import { REPLACE } from "./redux/types";

function App() {
  const isLoaded = useSelector((state) => state.stateReducer.isLoaded);
  const dispatch = useDispatch();
  useEffect(() => {
    getText(dispatch);
    document.addEventListener("keypress", (event) => {
      dispatch({ type: REPLACE });
    });
  }, []);

  return (
    <div className="App">
      {isLoaded && <Text />}
      {!isLoaded && <Loader />}
    </div>
  );
}

export default App;
