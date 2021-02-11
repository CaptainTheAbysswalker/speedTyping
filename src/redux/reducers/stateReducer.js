import { LOADED } from "../types";

const intialState = {
  isLoaded: false,
};

export const stateReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOADED: {
      return { ...state, isLoaded: true };
    }
    default: {
      return { ...state };
    }
  }
};
