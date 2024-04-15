import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#000",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ fontSize: "24px" }}>
        <a href="#" style={{ textDecoration: "none", color: "#FFFF" }}>
          mr.chandudev171
        </a>
      </div>
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          display: "flex",
        }}
      >
        <li style={{ marginRight: "20px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#FFFF",
              fontWeight: 500,
              transition: "color 0.3s ease",
            }}
          >
            Home
          </a>
        </li>
        <li style={{ marginRight: "20px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#FFFF",
              fontWeight: 500,
              transition: "color 0.3s ease",
            }}
          >
            About
          </a>
        </li>
        <li style={{ marginRight: "20px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontWeight: 500,
              color: "#FFFF",
              transition: "color 0.3s ease",
            }}
          >
            Portfolio
          </a>
        </li>
        <li style={{ marginRight: "20px" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#FFFF",
              fontWeight: 500,
              transition: "color 0.3s ease",
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontWeight: 500,
              color: "#FFFF",
              transition: "color 0.3s ease",
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
