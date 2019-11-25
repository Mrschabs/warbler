import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ currentUser }) => {
  if(!currentUser.isAuthenticated){
    return (
      <div className="home-hero">
        <h1>What's Happening</h1>
        <h4>New to Warbler?</h4>
        <Link to="signup" className="btn btn-primary">
          Sign up here
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>YOU MADE IT!</h1>
    </div>
  );
};

export default Homepage;