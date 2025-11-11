// Homepage.jsx
import React, { useState } from "react";
import ss from "../assets/banner1.jpg";
import ed from "../assets/education1.jpg";
import lg from "../assets/sslogo.jpg";
import dg from "../assets/dark_grey.jpg";
import pg from "../assets/plain_grey.jpg";
import bl from "../assets/blackline.jpg";
import black from "../assets/black1.jpg";
import dl from "../assets/download.jpg";
import "./Loginpage.css";

function Homepage() {
  const [hovered, setHovered] = useState(null);

  // Smooth scroll to #about (same component)
  const handleAboutClick = (e) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Hover style for nav items
  const menuStyle = (id) => ({
    borderRadius: "8px",
    color: hovered === id ? "red" : "#b6afafe7",
    cursor: "pointer",
    fontWeight: "650",
    padding: "10px",
    fontSize: "15px",
    transition: "color 0.3s ease",
  });

  return (
    <>
      {/* Outer background layers */}
      <div
        style={{
          backgroundImage: `url(${bl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        {/* First content block (hero) */}
        <div
          style={{
            marginTop: "40px",
            marginLeft: "80px",
            marginRight: "80px",
            marginBottom: "40px",
            borderRadius: "20px",
            backgroundImage: `url(${pg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          <div
            style={{
              marginTop: "-15px",
              marginLeft: "-15px",
              marginRight: "-15px",
              marginBottom: "-15px",
              borderRadius: "20px",
              backgroundImage: `url(${black})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
              padding: "20px",
            }}
          >
            {/* Header / Navigation */}
            <section className="homepage">
              <div className="bg-transparent container-fluid">
                <div className="row align-items-center">
                  <div className="col-3 d-flex align-items-center">
                    <img
                      src={lg}
                      alt="Surbhi Sharma Logo"
                      style={{ height: "50px", width: "69px" }}
                    />
                    <span
                      style={{
                        color: "#9b9797e7",
                        fontWeight: "700",
                        paddingLeft: "10px",
                        fontSize: "31px",
                      }}
                    >
                      Surbhi
                    </span>
                  </div>

                  <div className="col-6">
                    <ul className="nav d-flex justify-content-around align-items-center m-0 p-0">
                      {/* About – smooth scroll */}
                      <li
                        className="nav-link"
                        style={menuStyle("about")}
                        onMouseEnter={() => setHovered("about")}
                        onMouseLeave={() => setHovered(null)}
                        onClick={handleAboutClick}
                      >
                        About
                      </li>

                      {/* Other links (you can add scroll handlers later) */}
                      <li
                        className="nav-link"
                        style={menuStyle("skills")}
                        onMouseEnter={() => setHovered("skills")}
                        onMouseLeave={() => setHovered(null)}
                      >
                        Skills
                      </li>
                      <li
                        className="nav-link"
                        style={menuStyle("experience")}
                        onMouseEnter={() => setHovered("experience")}
                        onMouseLeave={() => setHovered(null)}
                      >
                        Work Experience
                      </li>
                      <li
                        className="nav-link"
                        style={menuStyle("contact")}
                        onMouseEnter={() => setHovered("contact")}
                        onMouseLeave={() => setHovered(null)}
                      >
                        Contact
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Hero Section */}
            <section>
              <div
                style={{
                  marginTop: "100px",
                  paddingLeft: "80px",
                  paddingRight: "80px",
                }}
                className="row align-items-center justify-content-center"
              >
                <div className="col-6">
                  <h5 style={{ color: "#b6afafe7" }}>Hi I am</h5>
                  <h4 style={{ color: "#b6afafe7" }}>Surbhi Sharma</h4>
                  <h1 style={{ color: "#b6afafe7" }}>Developer</h1>
                 <button
  style={{
    backgroundColor: "grey",
    borderRadius: "6px",
    padding: "10px 20px",
    marginTop: "16px",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  }}
  onClick={() => {
    // This opens AND downloads the PDF
    const link = document.createElement("a");
    link.href = "public/Fee_Reminders (5).pdf";  // Path from public
    link.download = "public/Fee_Reminders (5).pdf";     // File name when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  Download Resume
</button>
                </div>

                <div className="col-6 d-flex justify-content-center">
                  <img
                    src={dl}
                    alt="Surbhi Sharma - Front-End Developer"
                    style={{
                      width: "280px",
                      height: "280px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "5px solid #c0bbbbff",
                      boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
                    }}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* About Section (second block) */}
        <div
          style={{
            marginTop: "40px",
            marginLeft: "80px",
            marginRight: "80px",
            marginBottom: "40px",
            borderRadius: "20px",
            backgroundImage: `url(${pg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          <div
            style={{
              marginTop: "-15px",
              marginLeft: "-15px",
              marginRight: "-15px",
              marginBottom: "-15px",
              borderRadius: "20px",
              backgroundImage: `url(${black})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
              padding: "20px",
            }}
          >
            {/* ABOUT SECTION – with id for scrolling */}
            <section id="about">
              <div
                style={{
                  marginTop: "100px",
                  paddingLeft: "80px",
                  paddingRight: "80px",
                }}
                className="row align-items-center justify-content-center"
              >
                <div className="text-center">
                  <h1 style={{ color: "#e0e0e0" }}>About Me</h1>
                  <h4 style={{ color: "#d0d0d0", lineHeight: "1.6" }}>
                    I'm Surbhi Sharma, a Front-End Developer with 3.5 years of
                    hands-on experience. I hold a B.Tech in Computer Science
                    Engineering and specialize in building beautiful, fast, and
                    user-friendly web interfaces.
                    <br />
                    <br />I work with HTML, CSS, JavaScript (ES6+), React.js,
                    TypeScript, and Tailwind CSS to create responsive,
                    performance-optimized applications.
                  </h4>
                </div>
              </div>
            </section>
            
          </div>
        </div>
        <div
          style={{
            marginTop: "40px",
            marginLeft: "80px",
            marginRight: "80px",
            marginBottom: "40px",
            borderRadius: "20px",
            backgroundImage: `url(${pg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          <div
            style={{
              marginTop: "-15px",
              marginLeft: "-15px",
              marginRight: "-15px",
              marginBottom: "-15px",
              borderRadius: "20px",
              backgroundImage: `url(${black})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
              padding: "20px",
            }}
          >
            {/* ABOUT SECTION – with id for scrolling */}
            <section id="about">
              <div
                style={{
                  marginTop: "10px",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                }}
                className="row align-items-center justify-content-center"
              >
                <div className="text-center">
                  <h1 style={{ color: "#e0e0e0" }}><img src={ss} style={{width:'90%',height:'260px'}}/></h1>
                  <h4 style={{ color: "#d0d0d0", lineHeight: "1.6" }}>
                    I'm Surbhi Sharma, a Front-End Developer with 3.5 years of
                    hands-on experience. I hold a B.Tech in Computer Science
                    Engineering and specialize in building beautiful, fast, and
                    user-friendly web interfaces.
                    <br />
                    <br />I work with HTML, CSS, JavaScript (ES6+), React.js,
                    TypeScript, and Tailwind CSS to create responsive,
                    performance-optimized applications.
                  </h4>
                </div>
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;