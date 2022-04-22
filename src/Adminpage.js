import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Adminpage() {
  let navigate = useNavigate();
  useEffect(() => {
    if (!window.localStorage.getItem("app_token")) {
      navigate("/");
    }
  }, []);
  let logOut = () => {
    window.localStorage.removeItem("app_token");
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 adminpage">
          <h2 className="m-2">hello admin</h2>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              logOut();
            }}
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default Adminpage;
