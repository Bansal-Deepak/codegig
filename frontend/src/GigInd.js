import React from "react";

function GigInd(props) {
  let { gig } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{gig.title}</h4>
        <h6 className="card-subtitle">{gig.technologies}</h6>
        <h6 className="card-subtitle">{gig.budget}</h6>
        <p className="card-text">
          {gig.description}
          {gig.contact_email}
        </p>
      </div>
    </div>
  );
}

export default GigInd;
