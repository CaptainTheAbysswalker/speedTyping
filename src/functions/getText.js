import { GETTEXT, LOADED } from "../redux/types";

export const getText = async (dispatch) => {
  const req = fetch(
    "https://baconipsum.com/api/?type=meat-and-filler&paras=2"
  ).then((res) => res.json());
  req.then((data) =>
    dispatch({ type: GETTEXT, payload: data.join("").split("") })
  );

  dispatch({ type: LOADED });
};
