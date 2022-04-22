import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Mainpage() {
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
        <div className="col-sm-12 mainpage">
          <div className="h2 m-2">hello user</div>
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

export default Mainpage;
