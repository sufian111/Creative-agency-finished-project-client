import React from "react";
import { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import "./Login.css";
import logo from "../../Image/logo.png";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./FirebaseConfig";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var token = result.credential.accessToken;
        const { displayName, email, photoURL } = result.user;
        const userData = {
          isLogIn: true,
          displayName: displayName,
          email: email,
          photo: photoURL,
          success: true,
        };
        setLoggedInUser(userData);
        history.replace(from);
      })
      .catch((error) => {
        // console.log(error.message)
      });
  };

  return (
    <div>
      <div className="login d-flex justify-content-center">
        <div className="row">
          <div className="my-4">
            <Link to="/">
              <img src={logo} height="70" alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-center align-items-center my-5"
        style={{ height: "300px" }}
      >
        <div className="card mt-5 p-5 d-flex justify-content-center align-items-center">
          <div className="card-body ">
            <h3>Login With</h3>
          </div>
          <div className="social-login px-3 py-2 ">
            <button className="button " onClick={googleSignIn}>
              <img
                src="https://i.ibb.co/m5cpBvR/google.png"
                height="25"
                alt=""
              />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Continue with Google
            </button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Login;
