import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";

const Register = ({ history, location }) => {
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const message = useRef();

  const userData = useSelector((state) => state.register);
  const { error, userReg, loading } = userData;

  useEffect(() => {
    if (userReg) {
      history.push(redirect);
    }
  }, [userReg, history, redirect]);

  const registerTheUser = (e) => {
    e.preventDefault();

    dispatch(
      register(name.current.value, email.current.value, password.current.value)
    );
  };

  return (
    <div>
      <h1>Register..</h1>
      {loading && <h1>{loading}</h1>}
      {error && <h1>{error.error}</h1>}
      <form onSubmit={registerTheUser}>
        <input type="text" placeholder="name" ref={name} />
        <input type="email" placeholder="email" ref={email} />
        <input type="password" placeholder="password" ref={password} />
        <button>Register</button>
      </form>
      <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
        Register
      </Link>
    </div>
  );
};

export default Register;
