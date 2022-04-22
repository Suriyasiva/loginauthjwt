import React from "react";
import "./App.css";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { signInGoogle } from "./Firebasegauth";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        let login = await axios.post(
          "https://loginauthentication21.herokuapp.com/login",
          values
        );
        window.localStorage.setItem("app_token", login.data.token);
        let decode = jwt_decode(login.data.token);
        console.log(decode);
        if (decode.role === "user") {
          navigate("/mainpage");
        } else {
          navigate("/adminpage");
        }
      } catch (error) {
        console.log(error);
        alert("invalid username & password");
      }
      resetForm();
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = <i class="bi bi-exclamation-circle"></i>;
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = <i class="bi bi-exclamation"></i>;
      }
      if (!values.password) {
        errors.password = <i class="bi bi-exclamation-circle"></i>;
      }
      return errors;
    },
  });
  return (
    <>
      <h1>Name :{window.localStorage.getItem("name")}</h1>
      <h1>Gmail:{window.localStorage.getItem("email")}</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center">
            <div className="bg-card">
              <div className="d-flex justify-content-center mt-4">
                <h3>Login</h3>
              </div>
              <div className="m-3 mt-5">
                <form onSubmit={formik.handleSubmit}>
                  <div className="email-holder">
                    <label className="form-label">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    ></input>
                    {formik.errors.email ? (
                      <span className="email-icon" style={{ color: "red" }}>
                        {formik.errors.email}
                      </span>
                    ) : null}
                  </div>
                  <div className="password-holder">
                    <label className="form-label">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    ></input>
                    {formik.errors.password ? (
                      <span className="password-icon" style={{ color: "red" }}>
                        {formik.errors.password}
                      </span>
                    ) : null}
                  </div>
                  <div className="d-grid mt-2">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Login"
                    ></input>
                    <div className="d-flex justify-content-center m-0">
                      <p className=" m-0">-or-</p>
                    </div>
                    <button onClick={signInGoogle} className="btn btn-danger">
                      <i class="bi bi-google"></i> Login with google
                    </button>
                  </div>
                </form>
              </div>
              <div className="d-flex justify-content-center mt-2">
                <p>
                  Don't have an account ?{" "}
                  <Link to="/register">SignUp Here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
