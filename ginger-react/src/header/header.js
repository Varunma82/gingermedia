import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const navigate = useNavigate();
  const onLogOut = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
    // eslint-disable-next-line
  }, [sessionStorage.getItem("isLoggedIn")]);
  return (
    <div
      style={{
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <span style={{ fontSize: "35px", fontWeight: "600" }}>Assignment</span>
      {isLoggedIn && (
        <span style={{ color: "red", cursor: "pointer" }} onClick={onLogOut}>
          Logout
        </span>
      )}
    </div>
  );
};
export default Header;



/*

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const navigate = useNavigate();

  const onLogOut = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
  }, [sessionStorage.getItem("isLoggedIn")]);

  return (
    <div
      style={{
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "50px",
        background: "red", // Set background color to red
        borderBottom: "1px solid #ccc",
      }}
    >
      <span
        style={{
          fontSize: "24px",
          fontWeight: "600",
          color: "#fff", // Adjusted text color for readability on red background
        }}
      >
        Assignment
      </span>
      {isLoggedIn && (
        <span
          style={{
            color: "#fff", // Adjusted text color for readability on red background
            textDecoration: "underline", // Added for emphasis
            cursor: "pointer",
          }}
          onClick={onLogOut}
        >
          Logout
        </span>
      )}
    </div>
  );
};

export default Header;

*/