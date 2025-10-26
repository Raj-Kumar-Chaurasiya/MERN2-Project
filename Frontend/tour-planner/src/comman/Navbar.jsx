import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const navStyle = {
    backgroundColor: "#0d47a1",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    padding: "10px 0",
  };

  const brandStyle = {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.8rem",
    letterSpacing: "1px",
    textDecoration: "none",
    marginRight: "40px",
  };

  const linkBaseStyle = {
    color: "#fff",
    fontWeight: "600",
    margin: "0 15px",
    textDecoration: "none",
    fontSize: "1.1rem",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About ", path: "/about" },
    { name: "Destinations", path: "/destinations" },
    { name: "Add-Tourist", path: "/addtourist" },
    { name: "Contact ", path: "/contact" },
    { name: "Enquiry", path: "/enquiry" },
  ];

  return (
    <nav style={navStyle}>
      <div className="container-fluid d-flex flex-column align-items-center" style={{ textAlign: "center" }}>
        <Link to="/" style={brandStyle}>
          
        </Link>

        <ul
          className="navbar-nav d-flex flex-row justify-content-center flex-wrap"
          style={{ listStyle: "none", margin: "10px 0", padding: 0 }}
        >
          {links.map((item) => (
            <li className="nav-item" key={item.name}>
              <Link
                to={item.path}
                style={{
                  ...linkBaseStyle,
                  color: activeLink === item.name ? "#ff9800" : "#fff",
                  transform: activeLink === item.name ? "scale(1.2)" : "scale(1)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ffeb3b";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = activeLink === item.name ? "#ff9800" : "#fff";
                  e.target.style.transform = activeLink === item.name ? "scale(1.2)" : "scale(1)";
                }}
                onClick={() => setActiveLink(item.name)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
