import React from "react";
import { useDispatch } from "react-redux";
import { UserLogout } from "../redux/action/Authe.action";
import { AiOutlineLogout } from "react-icons/ai";
import "./button.css";
const Logout = ({ setShowDropdown }) => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(UserLogout(null));
    setShowDropdown(false);
  };

  return (
    <div>
      <button
        onClick={signOut}
        className="button-17 d-flex align-items-center"
        style={{ cursor: "pointer" }}
      >
        <AiOutlineLogout /> Logout
      </button>
    </div>
  );
};

export default Logout;
