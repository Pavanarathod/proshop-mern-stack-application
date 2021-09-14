import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const userData = useSelector((state) => state.user);
  const { userInfo } = userData;

  return (
    <div className="header">
      <h1>PROSHOP</h1>
      <div className="heaer__right">
        <Link to="/cart">cart</Link>
        {userInfo ? (
          <Link to="/profile">{userInfo.name}</Link>
        ) : (
          <Link to="/login">Sign IN</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
