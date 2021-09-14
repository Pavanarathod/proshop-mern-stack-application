import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, userProfile } from "../actions/userActions";

const ProfilePage = ({ history }) => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.profile);
  const { error, loading, profile } = userDetails;
  const userLogin = useSelector((state) => state.user);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      return history.push("/login");
    }
    dispatch(userProfile("profile"));
  }, [userInfo, history, dispatch]);

  const logoutUser = () => {
    dispatch(logout());

    history.push("/");
  };

  return (
    <div>
      <h1>Profilepage</h1>
      <h1>{profile.name}</h1>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default ProfilePage;
