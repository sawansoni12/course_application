import React from "react";
import "./Home.css";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className="home-wrapper">

      {/* HERO */}
      <section className="hero-section">
        <h1>Learn Code with Sawan</h1>
        <p>
          A professional learning platform focused on structured programming
          education, clean design, and practical understanding for students.
        </p>
        <Link to="view-courses">
        <button className="primary-btn">Start Learning</button>      
        </Link>
      </section>

      {/* FEATURE CARDS */}
      <section className="feature-section">

        {/* Card 1 */}
        <div className="feature-card fade-in">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
            alt="Structured Learning"
          />
          <div>
            <h3>Structured Learning</h3>
            <p>
              Courses are organized in a step-by-step structure that helps
              students build strong fundamentals and confidently move toward
              advanced programming concepts.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="feature-card fade-in delay-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Course Management"
          />
          <div>
            <h3>Easy Course Management</h3>
            <p>
              Add, view, and manage courses efficiently through a clean interface
              inspired by modern dashboards and professional web applications.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="feature-card fade-in delay-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
            alt="Beginner Friendly"
          />
          <div>
            <h3>Beginner Friendly</h3>
            <p>
              Designed especially for beginners and engineering students, making
              programming easy to understand, practical, and engaging.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
};

export default Home;