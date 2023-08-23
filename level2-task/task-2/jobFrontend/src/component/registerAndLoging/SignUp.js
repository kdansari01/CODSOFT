import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import Auth from "./Auth";
import { useDispatch } from "react-redux";
import { clearUserHaveAcount, newUsers } from "../redux/action/Authe.action";

function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setLoading] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearUserHaveAcount());
    dispatch(newUsers(navigate, setLoading, userData));
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Auth>
        <div className="col-8">
          <form className=" w-100" onSubmit={handleSubmit}>
            <h4 className="text-center">Sign Up</h4>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="username"
                value={userData.username}
                onChange={handleChange}
                placeholder="Enter Full Name"
              />
            </div>
            <div className="mb-3">
              <input
                name="email"
                type="email"
                className="form-control"
                value={userData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <input
                name="password"
                type="password"
                className="form-control"
                value={userData.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role">Select Role:</label>
              <select
                id="role"
                name="role"
                value={userData.role}
                onChange={handleChange}
                className="form-control"
              >
                <option value="candidate">Candidate</option>
                <option value="hiring">Hiring</option>
              </select>
            </div>

            <button type="submit" className="btn submit-btn">
              Sign Up
            </button>
          </form>
          <div className="sign-in">
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </Auth>
    </>
  );
}
export default SignUpPage;
