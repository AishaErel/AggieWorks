import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {auth, db} from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import myLogo from './myLogo.png';
import logo2 from './logo2.png';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleRegister= async (object) => {
        object.preventDefault();
        try {
          await  createUserWithEmailAndPassword(auth, email, password);
          const user = auth.currentUser;
          console.log(user);
          
          //creating a database for new user
          if (user) {
            await setDoc(doc(db, "Users", user.uid), {
                email: user.email,
                firstName: firstName,
                lastName: lastName
                // I dont save the password of the user
        
            });
          }
          console.log("You are Registered Succesfully!")
          window.location.href="/profile" //navigates to Profile page
        } catch (error) {
            console.log(error.message);
            console.error("Failed to register");
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <h1>
            Welcome to your Personalized Recipe Planner!
            </h1>
            <h2>
            Never Worry About What to Cook!
            </h2>
            <h3>
           Register Today!
            </h3>
            <div className = "mb-3"> 
             {/* adds spacing */}
                <label> First Name </label>
                <input
                type = "text"
                className = "form-control"
                //  {/* adds input style */}
                placeholder = "First Name"
                onChange = {(object) => setFirstName(object.target.value)}
                required/>

            </div>

            <div className = "mb-3"> 
                <label> Last Name </label>
                <input
                type = "text"
                className = "form-control"
                placeholder = "Last Name"
                onChange = {(object) => setLastName(object.target.value)}
                // defines an event handler (onChange) for changes in the input field
                required/>

            </div>

            <div className = "mb-3"> 
                <label> Email address </label>
                <input
                type = "email"
                className = "form-control"
                placeholder = "Please enter an email"
                onChange = {(object) => setEmail(object.target.value)}
                // defines an event handler (onChange) for changes in the input field
                required/>

            </div>

            <div className = "mb-3"> 
                <label> Password </label>
                <input
                type = "password"
                className = "form-control"
                placeholder = "Please ennter a password"
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
       Already have an account? <a href="/login">Login Here</a>
      </p>
    </form>
  );
}

export default Register;