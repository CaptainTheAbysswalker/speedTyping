import { GETTEXT, INCREASETIMER, REPLACE } from "../types";

const intialState = {
  currentPos: 0,
  mistakes: 0,
  succes: true,
  timer: 8,
  text: [],
};

export const textReducer = (state = intialState, action) => {
  switch (action.type) {
    case GETTEXT: {
      return { ...state, text: action.payload };
    }
    case REPLACE: {
      if (state.text[state.currentPos] === action.payload) {
        const newPos = state.currentPos + 1;
        return {
          ...state,
          currentPos: newPos,
          succes: true,
        };
      } else {
        state.mistakes++;
        return { ...state, succes: false };
      }
    }
    case INCREASETIMER: {
      return { ...state, timer: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
