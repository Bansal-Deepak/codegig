import React from "react";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark mb-4 mt-4 ">
        {" "}
        <div className="container ">
          <Link className="navbar-brand text-white text-center" to="#">
            Code Gig
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/allGigs">
                All Gigs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/addGig">
                Add Gig
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Landing;
