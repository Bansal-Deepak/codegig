import React from "react";
import { GET_GIGS, ADD_GIG } from "./types";

function GigReducer(state, action) {
  switch (action.type) {
    case GET_GIGS:
      return {
        ...state,
        gigs: action.payload,
      };
    case ADD_GIG:
      return {
        ...state,
        gigs: [...state.gigs, action.payload],
      };
  }
}

export default GigReducer;
