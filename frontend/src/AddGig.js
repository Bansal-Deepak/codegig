import React, { useState, useContext } from "react";
import GigContext from "./context/Gigs/gigContext";

function AddGig() {
  const gigContext = useContext(GigContext);
  let { addGig } = gigContext;
  let [gig, setGig] = useState({
    title: " ",
    technologies: " ",
    budget: " ",
    description: " ",
    contact_email: " ",
  });

  let changeGig = (e) => {
    e.preventDefault();
    setGig({
      ...gig,
      [e.target.name]: e.target.value,
    });
    console.log("gig", gig);
  };
  let createGig = (e) => {
    e.preventDefault();
    addGig(gig);
  };
  return (
    <form onSubmit={createGig}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          className="form-control"
          type="text"
          id="title"
          name="title"
          placeholder="Enter Title"
          onChange={changeGig}
        />
      </div>
      <div className="form-group">
        <label htmlFor="technologies">Technologies</label>
        <input
          className="form-control form-control-sm"
          type="text"
          id="technologies"
          name="technologies"
          placeholder="Enter Technologies"
          onChange={changeGig}
        />
      </div>
      <div className="form-group">
        <label htmlFor="budget">Budget</label>
        <input
          className="form-control form-control-lg"
          type="text"
          id="budget"
          name="budget"
          placeholder="Enter Budget"
          onChange={changeGig}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          className="form-control form-control-lg"
          type="text"
          id="description"
          name="description"
          placeholder="Enter Description"
          onChange={changeGig}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="form-control form-control-lg"
          type="email"
          id="email"
          name="contact_email"
          placeholder="Enter Email"
          onChange={changeGig}
        />
      </div>
      <button className="bg-primary" type="submit">
        Add Gig
      </button>
    </form>
  );
}

export default AddGig;
