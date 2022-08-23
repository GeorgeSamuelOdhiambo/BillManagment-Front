import React, { useRef, useState } from "react";
import Axios from "../Axios/Axios";

export const Registerform = () => {
  const [errorSms, setErrorSms] = useState(false);
  let errorMassage;
  const email = useRef();
  const name = useRef();
  const password = useRef();
  const passwordR = useRef();

  const loginSubmit = async (event) => {
    event.preventDefault();
    try {
      if (password.current.value !== passwordR.current.value) {
        const error = new Error();
        error.message = "Password not same";
        throw error;
      }

      const responce = await Axios.post("newuser", {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      });

      console.log(responce);
    } catch (error) {
      let errorData = error.response.data.error;
      console.log(errorData.message);
      errorMassage = errorData.message;
      setErrorSms(true);
    }
  };
  return (
    <>
      <form onSubmit={loginSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            required
            ref={name}
          />
          <label htmlFor="floatingInput">Your Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            required
            ref={email}
          />
          <label htmlFor="floatingEmail">Your Email</label>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                required
                ref={password}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPasswordR"
                required
                ref={passwordR}
              />
              <label htmlFor="floatingPasswordR">Repeat Password</label>
            </div>
          </div>
        </div>

        <div className="d-grid">
          <button
            className="btn btn-primary btn-login text-uppercase fw-bold"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      {errorSms && (
        <div className="bg-danger">
          <p className="card-title text-center mb-5 fw-light fs-5">
            {errorMassage}
          </p>
        </div>
      )}
    </>
  );
};
