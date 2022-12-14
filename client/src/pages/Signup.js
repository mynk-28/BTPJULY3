import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Routes";
import axios from 'axios';
import tick from "../static/tick.png";
import cross from "../static/cross.png";
import "../styles/LoginForm.css"

const Signup = (props) => {
  const { isShowLogin, setIsShowLogin, setIsLoggedIn, setIsAdmin } = props;

  // destructing properties and functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loginAnimation, setLoginAnimation] = useState(0);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignup = async () => {
    console.log("signup is clicked")
    await axios
      .post("http://localhost:5000/api/users", {
        name,
        email,
        password,
      })
      .then((res) => {


        window.sessionStorage.setItem("x-auth-token", res.data.token);
        window.sessionStorage.setItem("userId", res.data.userId);
        window.sessionStorage.setItem("email", email);
        window.sessionStorage.setItem("name", name);
        console.log(res.data);
        setUser({
          userId: res.data.userId,
          email,
          name: res.data.name,
          isAdmin: res.data.isAdmin,
        })
        navigate('/');
      })
      .catch((e) => {
        window.alert('Login unsuccessful');

      });
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    // that login form will be active or not is actually depending on the isShowLogin
    <div className="login">
      <form className="form-box">
        <h1 className="login-text">Welcome!</h1>
        <label>Name</label>

        <input
          type="text"
          onChange={onChangeName}
          className="login-box"
        />
        <br></br>
        <label>Email</label>
        <input
          type="text"
          onChange={onChangeEmail}
          className="login-box"
          placeholder="use college email id"
        />
        <br></br>
        <label>Password</label>
        <input
          type="password"
          onChange={onChangePassword}
          className="login-box"
        />

        <br></br>
        <input
          type="button"
          value="SIGN UP"
          onClick={handleSignup}
          className="login-btn"
        />

      </form>
      {/* {loginAnimation === 1 ? (
                <div className="login-checkbox">
                    <img alt="success" className="login-successful" src={tick}></img>
                    <h3 className="login-successful-text">Login Successful</h3>
                </div>
            ) : loginAnimation === 2 ? (
                <div className="login-checkbox">
                    <img alt="failure" className="login-successful" src={cross}></img>
                    <h3 className="login-successful-text">Login Unsuccessful</h3>
                </div>
            ) : null} */}
      {/* <GoogleSignIn></GoogleSignIn> */}
    </div>
  );
};
export default Signup;
