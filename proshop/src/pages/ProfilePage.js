import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateUserProfile, userProfile } from "../actions/userActions";

const ProfilePage = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.profile);
  const { error, loading, profile } = userDetails;
  const userLogin = useSelector((state) => state.user);
  const { userInfo } = userLogin;
  const userUpdateProfileState = useSelector((state) => state.updateProfile);
  const { success } = userUpdateProfileState;

  useEffect(() => {
    if (!userInfo) {
      return history.push("/login");
    } else {
      if (!profile.name) {
        dispatch(userProfile("profile"));
      } else {
        setName(profile.name);
        setEamil(profile.email);
      }
    }
  }, [userInfo, history, dispatch, profile]);

  const logoutUser = () => {
    dispatch(logout());
    history.push("/");
  };

  const update = (e) => {
    e.preventDefault();
    dispatch(
      updateUserProfile({
        id: profile._id,
        name: name,
        email: email,
        password: password,
      })
    );
  };

  return (
    <div>
      <div>
        <h1>User Profile</h1>
        {error && <h1>{error.error}</h1>}
        {loading && <h1>{loading}</h1>}
        {success && <h1>Update Susccess</h1>}
        <div>
          <form onSubmit={update}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <button>Update Profile</button>
          </form>
        </div>
        <button onClick={logoutUser}>Logout</button>
      </div>

      <div></div>
    </div>
  );
};

export default ProfilePage;
