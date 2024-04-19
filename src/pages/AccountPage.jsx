import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const AccountPage = () => {
  return (
    <div className="my-4">
      <p>
        To access your notes from anywhere and never lose them, just create an
        accountPage (it will take less than a minute). If you already have an
        account, you can login below.
      </p>
      <Register />
      <Login />
      <h3>Google Login</h3>
      <button className="btn btn-outline-secondary">
        <i className="fa-brands fa-google"></i> Đăng nhập bằng Google
      </button>
    </div>
  );
};

export default AccountPage;
