import React, { useState, useEffect } from "react";

import "react-calendar/dist/Calendar.css";
import { db, auth } from "./firebase";
import { doc, setDoc, collection, getDoc } from "firebase/firestore"; // Import Firestore functions

const handleLogin = () => {
  window.location.href = "/login"; // Navigates to the login page
};
const handleRecipeIdeas = () => {
  window.location.href = "/recipeIdeas"; //navigates to recipeIdeas
};
const handleProfile = () => {
  window.location.href = "/profile"; // Navigates to the profile
};

export const RecipePlanner = () => {
  const [date, setDate] = useState(new Date()); // to store currently selected date
  const [recipe, setRecipe] = useState(""); // to store recipe text entered
  const [user, setUser] = useState(null); // stores the current logged in user
  const [savedRecipe, setSavedRecipe] = useState(null); //to store previously saved recipe

  useEffect(() => {
    //to keep track of user logged in status

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser); // sets to current user if user logged in
      } else {
        setUser(null); //not logged in
      }
    });
    return () => unsubscribe(); // avoids unnecessary listening
  }, []);

  const handleSavingRecipe = async () => {
    if (user && date) {
      //if both user and date are verified
      const userId = user.uid;
      const rememberedDate = date.toLocaleDateString();

      // using Firestore's doc() function, it points to recipes collection and has a subcollection
      const userRecipeRef = doc(
        db,
        "recipes",
        userId,
        "userRecipes",
        rememberedDate
      );

      // saves the recipe in firestore using setDoc
      try {
        await setDoc(userRecipeRef, { recipe });
        alert("Recipe saved successfully!");
      } catch (error) {
        console.error("Error saving recipe: ", error);
      }
    } else {
      alert("Please log in to your account to save your recipe.");
    }
  };

  useEffect(() => {
    //for a case whenever user or date changes
    if (user && date) {
      const userId = user.uid;
      const rememberedDate = date.toLocaleDateString();

      const userRecipeRef = doc(
        //same process as handleSavingRecipe
        db,
        "recipes",
        userId,
        "userRecipes",
        rememberedDate
      );

      getDoc(userRecipeRef) //will check if there is a saved (previus) recipe
        .then((docSnap) => {
          if (docSnap.exists()) {
            setSavedRecipe(docSnap.data().recipe); // set the saved recipe if found
          } else {
            setSavedRecipe(null); // no recipe found
          }
        })
        .catch((error) => {
          console.error("Error finding saved recipe: ", error);
        });
    }
  }, [user, date]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Recipe Planner</h2>

      <label>Select a Date: </label>
      <input
        type="date"
        value={date.toISOString().substr(0, 10)} //date format
        onChange={(e) => setDate(new Date(e.target.value))}
      />

      <textarea
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
        placeholder="Write your recipe here..."
        rows="4" // Adjust the size as needed
        style={{ width: "100%", marginTop: "10px" }}
      />

      {/* Button to save the recipe */}
      <div className="button-container">
        <button className="btn btn-success" onClick={handleSavingRecipe}>
          Save Recipe
        </button>
      </div>

      {/* Display the saved recipe */}
      {savedRecipe && (
        <div
          style={{
            marginTop: "20px",
            borderTop: "1px solid #ccc",
            paddingTop: "10px",
          }}
        >
          <h3>Saved Recipe for {date.toLocaleDateString()}:</h3>
          <p>{savedRecipe}</p>
        </div>
      )}

      {/* Buttons for additional actions */}
      <div className="button-container">
        <button className="btn btn-info" onClick={handleLogin}>
          Go to Login
        </button>
        <button className="btn btn-primary" onClick={handleRecipeIdeas}>
          Go to Recipe Ideas
        </button>
        <button className="btn btn-danger" onClick={handleProfile}>
          Go to Profile
        </button>
      </div>
    </div>
  );
};
export default RecipePlanner;
