import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Routes";
import axios from 'axios';
import tick from "../static/tick.png";
import cross from "../static/cross.png";

const Login = (props) => {

    // destructing properties and functions
    const { isShowLogin, setIsShowLogin, setIsLoggedIn, setIsAdmin } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginAnimation, setLoginAnimation] = useState(0);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();


    const handleLogin = async () => {
        await axios
            .post("http://localhost:5000/api/auth", {
                email,
                password,
            })
            .then((res) => {
                // ????? detailed meaning of these
                window.sessionStorage.setItem("x-auth-token", res.data.token);
                window.sessionStorage.setItem("userId", res.data.userId);
                window.sessionStorage.setItem("email", email);
                window.sessionStorage.setItem("name", res.data.name);
                console.log(email)
                // if (email === '19ucs151@gmail.com' && password === 'Mayank@41') {
                //   setIsAdmin(true);
                // }
                //   setIsLoggedIn(true);
                //   setLoginAnimation(1);
                //   setTimeout(() => {
                //     setLoginAnimation(0);
                //     setIsShowLogin(false);
                //   }, 1500);
                setUser({
                    userId: res.data.userId,
                    email,
                    name: res.data.name,
                    isAdmin: res.data.isAdmin,
                })
                navigate('/');
            })
            .catch(() => {
                //   setLoginAnimation(2);
                //   setTimeout(() => {
                //     setLoginAnimation(0);
                //   }, 1500);
                window.alert('Login unsuccessful');
            });
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        // that login form will be active or not is actually depending on the isShowLogin
        <div className={``}>
            <form className="form">
                <h1 className="login-text">Welcome Back!</h1>
                <label>Email address</label>
                <br></br>

                <input
                    type="email"
                    onChange={onChangeEmail}
                    className="login-box"
                />

                <br></br>
                <label>Password</label>
                <br></br>

                <input
                    type="password"
                    onChange={onChangePassword}
                    className="login-box"
                />

                <br></br>
                <input
                    type="button"
                    value="LOGIN"
                    onClick={handleLogin}
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
export default Login;
