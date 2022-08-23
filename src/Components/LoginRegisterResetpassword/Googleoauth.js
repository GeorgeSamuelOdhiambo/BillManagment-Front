import React, { useEffect } from "react";

export const Googleoauth = () => {
  //   const handleCallbackResponce = (response) => {
  //     console.log(response.credencial);
  //   };

  //   useEffect(() => {
  //     /* global google */
  //     let google;
  //     google.accounts.id.initialize({
  //       client_id:
  //         "1016112925511-l31mb7b0uvmgvvulhjg76q341m20ro1d.apps.googleusercontent.com",
  //       callback: handleCallbackResponce,
  //     });

  //     google.accounts.id.renderButton(document.getElementById("signIn"), {
  //       theme: "outline",
  //       size: "large",
  //     });
  //   }, []);
  return (
    <div className="d-grid mb-2" id="signIn">
      <button
        className="btn btn-google btn-login text-uppercase fw-bold bg-danger"
        type="submit"
      >
        <i className="fab fa-google me-2"></i> Sign in with Google
      </button>
    </div>
  );
};

export const Facebook = () => {
  return (
    <div className="d-grid">
      <button
        className="btn btn-facebook btn-login text-uppercase fw-bold bg-primary"
        type="submit"
      >
        <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
      </button>
    </div>
  );
};
