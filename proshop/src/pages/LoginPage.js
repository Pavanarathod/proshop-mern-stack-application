import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/userActions";

const LoginPage = ({ location, history }) => {
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();

  const userLogin = useSelector((state) => state.user);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(email.current.value, password.current.value));
  };

  return (
    <div>
      {loading && <h3>Loading</h3>}
      {error && <h2>{error.error}</h2>}
      <h1>Sign IN</h1>
      <form onSubmit={loginHandler}>
        <input type="email" ref={email} required />
        <input type="password" ref={password} required />
        <button>Signin</button>
      </form>

      <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
        Register
      </Link>
    </div>
  );
};

export default LoginPage;
