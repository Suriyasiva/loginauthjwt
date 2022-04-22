import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post(
          "https://loginauthentication21.herokuapp.com/register",
          values
        );
        alert("userdata registered");
      } catch (error) {
        console.log(error);
      }
      resetForm();
      navigate("/");
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = <i class="bi bi-exclamation-circle"></i>;
      }
      if (!values.email) {
        errors.email = <i class="bi bi-exclamation-circle"></i>;
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = <i class="bi bi-exclamation"></i>;
      }
      if (!values.number) {
        errors.number = <i class="bi bi-exclamation-circle"></i>;
      }
      if (!values.password) {
        errors.password = <i class="bi bi-exclamation-circle"></i>;
      }
      return errors;
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 d-flex justify-content-center">
          <div className="reg-card">
            <div className="d-flex justify-content-center mt-3">
              <h3>Register</h3>
            </div>
            <div className="mt-5 m-3">
              <form onSubmit={formik.handleSubmit}>
                <div className="inp-container">
                  <label className="form-label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control inp-name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.errors.name ? (
                    <div className="icon-name" style={{ color: "red" }}>
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="inp-container">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control inp-email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email ? (
                    <div className="icon-email" style={{ color: "red" }}>
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="inp-container">
                  <label className="form-label">Phone Number</label>
                  <input
                    name="number"
                    type="number"
                    className="form-control inp-number"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                  />
                  {formik.errors.number ? (
                    <div className="icon-number" style={{ color: "red" }}>
                      {formik.errors.number}
                    </div>
                  ) : null}
                </div>
                <div className="inp-container">
                  <label className="form-label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control inp-password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password ? (
                    <div className="icon-password" style={{ color: "red" }}>
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="d-grid mt-2">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="SignUp"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
