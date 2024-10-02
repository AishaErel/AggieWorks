import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import About from "./components/About";
import RecipePlanner from "./components/RecipePlanner";
import RecipeIdeas from "./components/RecipeIdeas";
import { useEffect } from "react";
import { auth } from "./components/firebase";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/recipeIdeas" element={<RecipeIdeas />} />
              <Route path="/recipePlanner" element={<RecipePlanner />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
