import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <div className="Logo" onClick={() => navigate("/")}>
        <h1 style={{ color: "var(--blue-light)" }}>
          Chat
          <span style={{ color: "var(--purple-dark)" }}>App</span>
        </h1>
      </div>
      {localStorage.getItem("token") === null ? (
        <div className="NavButtons">
          <div className="LoginButton" onClick={() => navigate("/chat")}>
            Chat
          </div>
          <div className="RegisterBox">
            <div
              className="RegisterButton"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </div>
            <div className="LoginButton" onClick={() => navigate("/login")}>
              {" "}
              or Login
            </div>
          </div>
        </div>
      ) : (
        <div
          className="RegisterButton"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          Logout
        </div>
      )}
    </div>
  );
}

export default Navbar;
