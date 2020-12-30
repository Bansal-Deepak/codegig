import React, { useEffect, useContext } from "react";
import axios from "axios";
import GigContext from "./context/Gigs/gigContext";
import GigInd from "./GigInd";
function Gigs() {
  let gigContext = useContext(GigContext);
  let { gigs, getGigs } = gigContext;
  useEffect(() => {
    getGigs();
  }, [gigs]);

  return (
    <div>
      {gigs.map((g) => (
        <GigInd gig={g} key={g.id} />
      ))}
    </div>
  );
}

export default Gigs;
