import { LOADED, RUNTIMER } from "../types";

const intialState = {
  isLoaded: false,
  isRun: false,
};

export const stateReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOADED: {
      return { ...state, isLoaded: true };
    }
    case RUNTIMER: {
      if (!state.isRun) {
        return { ...state, isRun: true };
      } else {
        return { ...state };
      }
    }
    default: {
      return { ...state };
    }
  }
};
