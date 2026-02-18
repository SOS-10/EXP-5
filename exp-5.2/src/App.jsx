import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./Dashboard.css";
import profilePic from "./assets/wallpaper.jpeg";

const Contact = lazy(() => import("./Contact"));

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="app-name">MyApp</h2>
      <div>
        <Link to="/">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container">
      <div className="card">
        <h1>About Page</h1>

        <img
          src={profilePic}
          alt="Profile"
          className="profile-img"
        />

        <h2>About Me</h2>
        <p>
          I am a full-stack developer passionate about building scalable
          and efficient web applications.
        </p>

        <h2>Skills</h2>
        <ol className="list">
          <li>Java</li>
          <li>Python</li>
          <li>SQL</li>
          <li>MERN Stack</li>
        </ol>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense
        fallback={
          <div className="center-wrapper">
            <div className="card loading-card">
              <h1>Loading...</h1>
              <p>Contact page is loading</p>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
