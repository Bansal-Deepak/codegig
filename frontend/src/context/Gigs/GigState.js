import React, { useReducer } from "react";
import { GET_GIGS, ADD_GIG } from "./types";
import GigContext from "./gigContext";
import GigReducer from "./gigReducer";
import axios from "axios";

function GigState(props) {
  let initialState = {
    gigs: [],
  };
  const [state, dispatch] = useReducer(GigReducer, initialState);

  let getGigs = async () => {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await axios.get(`http://localhost:5000/gigs`, config);
    dispatch({
      type: GET_GIGS,
      payload: res.data,
    });
  };

  let addGig = async (gigData) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let result = await axios.post(
      `http://localhost:5000/gigs/add`,
      gigData,
      config
    );
    dispatch({
      type: ADD_GIG,
      payload: result.data.newgig,
    });
  };
  return (
    <GigContext.Provider
      value={{
        gigs: state.gigs,
        addGig,
        getGigs,
      }}
    >
      {props.children}
    </GigContext.Provider>
  );
}

export default GigState;
