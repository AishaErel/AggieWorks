import React from "react";
import profile_photo from "./profile_photo.jpeg";

export const About = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Meet the Author!</h1>

      <p style={{ maxWidth: "600px", margin: "0 auto" }}>
        Hi, My name is Aisha, I am a senior student at UCD, who studies Computer
        Science. As a college student myself, I know that we are generally too
        busy to cook great meals. However, I really value the importance of
        eating well, that's why I wanted to design this website for students who
        want to cook healthy and easy to make foods which were influenced by my
        cultural background. Users can see Recipe Ideas page for reference and
        plan their own cooking schedule from the calendar on Recipe Planner
        page, Enjoy!
      </p>
      <img src={profile_photo} alt="Second Logo" className="App-image" />
    </div>
  );
};
export default About;
