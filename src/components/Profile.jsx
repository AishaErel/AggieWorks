import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userInfo, setUserInfo] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserInfo(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  const handleAbout = () => {
    window.location.href = "/about"; // Navigates to the about
  };
  const handleRecipeIdeas = () => {
    window.location.href = "/recipeIdeas"; // Navigates to the recipe ideas
  };
  const handleRecipePlanner = () => {
    window.location.href = "/recipePlanner"; // Navigates to the recipe planner
  };

  return (
    <div>
      {userInfo ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}></div>
          <h3>Welcome {userInfo.firstName} 🤗</h3>
          <div>
            <p>Email: {userInfo.email}</p>
            <p>First Name: {userInfo.firstName}</p>
          </div>
          <div className="button-container">
            <button className="btn btn-danger" onClick={handleRecipeIdeas}>
              Go to Recipe Ideas Page
            </button>
            <button className="btn btn-primary" onClick={handleRecipePlanner}>
              Go to Your Recipe Planner
            </button>
            <button className="btn btn-success" onClick={handleAbout}>
              About the Author
            </button>
            <button className="btn btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Profile;
