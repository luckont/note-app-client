import React from "react";

const Login = () => {
  return (
    <form className="w-100 my-5">
      <h3>Login</h3>
      <div className="row">
        <div className="col-2 mb-3">
          <label htmlFor="inputEmail1" className="col-form-label">
            Email
          </label>
        </div>
        <div className="col-auto w-50">
          <input type="email" id="inputEmail1" className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <label htmlFor="inputPassword1" className="col-form-label">
            Password
          </label>
        </div>
        <div className="col-auto w-50">
          <input type="password" id="inputPassword1" className="form-control" />
        </div>
      </div>
      <div className="my-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Remember me
        </label>
      </div>
      <button type="submit" className="btn background-color-system text-light mt-4">
        Login
      </button>
    </form>
  );
};

export default Login;
