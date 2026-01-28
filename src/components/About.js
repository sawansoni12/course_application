import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h1 className="about-title">About</h1>

        {/* Box 1 */}
        <div className="about-box">
          <h3>About the Project</h3>
          <p>
            Courses Application is a frontend-based learning platform developed
            using React. The application helps users explore programming courses
            in a structured and beginner-friendly manner.
          </p>
          <p>
            It demonstrates core concepts of React such as components, routing,
            state management, and reusable UI design while maintaining a clean
            and professional user interface.
          </p>
        </div>

        {/* Box 2 */}
        <div className="about-box">
          <h3>Key Features</h3>
          <ul>
            <li>Structured list of programming courses</li>
            <li>Easy navigation using React Router</li>
            <li>Clean and responsive UI</li>
            <li>Beginner-friendly learning experience</li>
          </ul>
        </div>

        {/* Box 3 */}
        <div className="about-box">
          <h3>About Me</h3>
          <p>
            My name is Sawan Soni. I am a Frontend Developer and
            currently pursuing my B.Tech (Final Year) from
             Engineering College Bikaner.
          </p>
          <p>
            I have a strong interest in web development and enjoy building clean,
            interactive, and user-friendly interfaces using modern frontend
            technologies like React.
          </p>
        </div>

        {/* Box 4 */}
        <div className="about-box">
          <h3>Vision</h3>
          <p>
            My vision is to build fully functional and professional web
            applications that focus on simplicity, usability, and scalability
            while continuously improving my development skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;