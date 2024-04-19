import React from "react";

const Register = () => {
  return (
    <form className="w-100 mt-2">
      <h3>Create an Account</h3>
      <div className="row">
        <div className="col-2 mb-3">
          <label htmlFor="inputEmail" className="col-form-label">
            Email
          </label>
        </div>
        <div className="col-auto w-50">
          <input type="email" id="inputEmail" className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <label htmlFor="inputPassword" className="col-form-label">
            Password
          </label>
        </div>
        <div className="col-auto w-50">
          <input type="password" id="inputPassword" className="form-control" />
        </div>
      </div>
      <button type="submit" className="btn background-color-system text-light mt-4">
        Create an Account
      </button>
    </form>
  );
};

export default Register;
