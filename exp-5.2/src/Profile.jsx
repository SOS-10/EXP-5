import "./Dashboard.css";
import profilePic from "./assets/wallpaper.jpeg";

function Profile() {
  return (
    <div className="container">
      <div className="card">
        <h1>Profile Page</h1>

        <img src={profilePic} className="profile-img" alt="Profile" />

        <h2>Projects</h2>
        <ol className="list">
          <li>Fake News Chatbot</li>
          <li>Real-time Chat Application</li>
        </ol>

        <h2>Achievements</h2>
        <ol className="list">
          <li>Cosmic Hackathon Winner</li>
        </ol>
      </div>
    </div>
  );
}

export default Profile;
