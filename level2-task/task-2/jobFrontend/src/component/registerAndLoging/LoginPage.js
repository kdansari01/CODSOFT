import React, { useEffect, useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import Auth from "./Auth";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/action/Authe.action";

function LoginPage() {
  const dispatch = useDispatch();
  const [, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  // console.log("user=====>", user);
  useEffect(() => {
    if (user?.token) {
      navigate("/Home");
    }
  }, [navigate, user]);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(setLoading, userData));
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Auth>
        <div className="col-8">
          <form className="w-100" onSubmit={handleLogin}>
            <h4 className="text-center">Login</h4>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn submit-btn">
              Login
            </button>
          </form>
          <p className="hr-lines">OR</p>
          <div className="social-sign-up">
            <button className="btn social">
              <i className="fa-brands fa-google"></i> Login with Google
            </button>
          </div>
          <div className="sign-in">
            <p>
              Create an account? <Link to="/SignUp">Sign Up</Link>
            </p>
          </div>
        </div>
      </Auth>
    </>
  );
}
export default LoginPage;
