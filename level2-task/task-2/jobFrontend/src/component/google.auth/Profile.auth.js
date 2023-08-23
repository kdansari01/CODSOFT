import React, { useState } from "react";
import userLogo from "../../assests/loginLogo.gif";
import { useSelector } from "react-redux";
import Logout from "./Logout";
// import { useNavigate } from "react-router-dom";
const Profile = () => {
  // const user = useSelector((state) => state.singleUser.singleUserData);
  const getUser = useSelector((state) => state.user.user);
  console.log(getUser);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownClick = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <div>
      <div
        className="dropdown cursor-pointer"
        style={{
          position: "relative",
          padding: "2px",
          width: "50px",
          height: "50px",
          objectFit: "cover",
          border: "2px solid grey",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        <div onClick={handleDropdownClick}>
          <img
            src={userLogo}
            alt="User"
            style={{
              width: "100%",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        </div>
        {showDropdown && (
          <div className="customDrop">
            <div>
              {getUser && (
                <div
                  style={{ position: "absolute", top: "3rem", left: "-2.5rem" }}
                >
                  <div className=" " style={{ textAlign: "center" }}>
                    <Logout setShowDropdown={setShowDropdown} />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
