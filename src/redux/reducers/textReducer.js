import { GETTEXT, REPLACE } from "../types";

const intialState = {
  currentPos: 0,
  mistakes: 0,
  suces: true,
  text: [],
};

export const textReducer = (state = intialState, action) => {
  switch (action.type) {
    case GETTEXT: {
      return { ...state, text: action.payload };
    }
    case REPLACE: {
      console.log();
      if (state.text[state.currentPos] === action.payload) {
        const newPos = state.currentPos + 1;
        return { ...state, currentPos: newPos };
      } else {
        state.mistakes++;
        return { ...state, succes: false };
      }
    }
    default: {
      return { ...state };
    }
  }
};
