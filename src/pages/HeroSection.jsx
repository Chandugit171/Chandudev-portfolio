import React from "react";
import backgroundImage from "../assets/dev.jpg"; // Import your local image here

function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image using template literals
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Welcome to Web and Mobile Application Dev's
        </h1>
        <p style={{ fontSize: "24px", maxWidth: "600px", margin: "0 auto" }}>
          My name is <span style={{ color: "#ff0000" }}>Chandra Obulesu</span>{" "}
          and I'm a{" "}
          <span style={{ fontWeight: "bold" }}>
            Frontend Web and Mobile Application Developer
          </span>
          . I'm from <span style={{ color: "#ff0000" }}>India</span>, living in{" "}
          <span style={{ color: "#ff0000" }}>Hyderabad</span> and currently
          working at{" "}
          <span style={{ fontStyle: "italic" }}>
            OHM Automotives pvt.ltd Hyderabad
          </span>
          .
        </p>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            backgroundColor: "#007bff",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
