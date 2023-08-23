import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { getUserByIdAction } from "../redux/action/getUser.action";

const ProfilePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    // dispatch(getUserByIdAction(id));
  }, [dispatch, id]);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {user && (
        <div>
          <h2>Profile Page</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
