import React, { useRef } from "react";
import Axio from "../Axios/Axios";

export const Loginform = () => {
  const email = useRef();
  const password = useRef();

  const loginSubmit = async (event) => {
    event.preventDefault();
    try {
      const responce = await Axio.post("login", {
        email: email.current.value,
        password: password.current.value,
      });
      console.log(responce.data);
    } catch (error) {
      let errorData = error.response.data.error;
      console.log(errorData.message);
    }
  };
  return (
    <form onSubmit={loginSubmit}>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          required
          ref={email}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
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

      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="rememberPasswordCheck"
        />
        <label className="form-check-label" htmlFor="rememberPasswordCheck">
          Remember password
        </label>
      </div>
      <div className="d-grid">
        <button
          className="btn btn-primary btn-login text-uppercase fw-bold"
          type="submit"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};
