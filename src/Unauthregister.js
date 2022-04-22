import React from "react";
import { Link } from "react-router-dom";

function Unauthregister() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 adminpage">
          <h2 className="m-2">Hello</h2>
          <Link to="/register">
            <marquee style={{ color: "red", fontSize: "3em" }}>
              You don't have an acess click here to <b>Signup</b>
            </marquee>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Unauthregister;
