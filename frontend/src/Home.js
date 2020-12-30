import React, { useState } from "react";
import GigInd from "./GigInd";
import axios from "axios";
function Home() {
  let [searchedGigs, setSearchGigs] = useState([]);
  let [term, setTerm] = useState(null);
  let changeTerm = (e) => {
    e.preventDefault();
    console.log("t>", e.target.value);
    setTerm(e.target.value);
  };
  let searchGigs = async (e) => {
    e.preventDefault();
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let result = await axios.get(
      `http://localhost:5000/gigs/search?term=${term}`,
      config
    );
    console.log("res>", result.data);
    setSearchGigs(result.data);
  };
  return (
    <div>
      <form onSubmit={searchGigs}>
        <input
          type="text"
          placeholder="Enter term for search..."
          onChange={changeTerm}
        />
        <button type="submit">Search Gigs</button>
      </form>
      {searchedGigs.length != 0 &&
        searchedGigs.map((s) => <GigInd gig={s} key={s.id} />)}
    </div>
  );
}

export default Home;
