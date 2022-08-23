import React from "react";
import { Googleoauth, Facebook } from "./Googleoauth";
import { Loginform } from "./Loginform";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Sign In
              </h5>
              <Loginform />
              <hr className="my-4" />
              <Googleoauth />
              <Facebook />
            </div>
            <p className="card-title text-center mb-5 fw-light fs-5">
              Dont have an accoun? <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
