import { GETTEXT, REPLACE } from "../types";

const intialState = {
  currentPos: 0,
  text: [],
};

export const textReducer = (state = intialState, action) => {
  switch (action.type) {
    case GETTEXT: {
      return { ...state, text: action.payload };
    }
    case REPLACE: {
      state.currentPos++;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
