import React from "react";
import { Link } from "react-router-dom";
import { Registerform } from "./Registerform";

const Register = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-11 col-md-10 col-lg-7 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Sign Up
              </h5>
              <Registerform />
            </div>
            <p className="card-title text-center mb-5 fw-light fs-5">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
