import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import myLogo from './myLogo.png';
import logo2 from './logo2.png';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSignIn= async (object) => {
        object.preventDefault();
        try {
          await  signInWithEmailAndPassword(auth,email, password);
          const user = auth.currentUser;
          console.log(user);
          console.log("You are Logged In Succesfully!")
          window.location.href="/profile" //navigates to Profile page
        } catch (error) {
            console.log(error.message);
            console.error("Failed to Login");
        }
    };

    return (
        <form onSubmit={handleSignIn}>
            <h2>
            Welcome Back to your Personalized Recipe Planner!
            </h2>
            <h3>
           Sign In!
           </h3>
            <div className = "mb-3"> 
             {/* adds spacing */}
                <label> Email Address </label>
                <input
                type = "email"
                className = "form-control"
                //  {/* adds input style */}
                placeholder = "Please enter an email address"
                value = {email}
                onChange = {(object) => setEmail(object.target.value)}
                required/>

            </div>

            <div className = "mb-3"> 
                <label> Password </label>
                <input
                type = "password"
                className = "form-control"
                placeholder = "Please enter a password"
                onChange = {(object) => setPassword(object.target.value)}
                // defines an event handler (onChange) for changes in the input field
                required/>

            </div>

            <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="image-container">
          <img src={myLogo} alt="Logo" className="App-image" />
          <img src={logo2} alt="Second Logo" className="App-image" />
        </div>
      </div>
      <p className="forgot-password text-right">
        New user <a href="/register">Register Here</a>
      </p>
    </form>
  );
}

export default Login;