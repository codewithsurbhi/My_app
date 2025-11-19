import React, { useState, useEffect } from "react";
import ss from "../assets/banner1.jpg";
import ed from "../assets/education1.jpg";
import lg from "../assets/sslogo.jpg";
import dg from "../assets/dark_grey.jpg";
import pg from "../assets/plain_grey.jpg";
import bl from "../assets/blackline.jpg";
import black from "../assets/black1.jpg";
import dl from "../assets/download.jpg"; // default photo
import "./Loginpage.css";

function Homepage() {
  const [hovered, setHovered] = useState(null);

  // ✔ Jokes API State
  const [joke, setJoke] = useState(null);

  // ✔ Resume Upload State
  const [uploadedResume, setUploadedResume] = useState(null);

  // ✔ Photo Upload State
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  // ✔ Jokes API Call
  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => setJoke(data))
      .catch((err) => console.log("Joke API Error:", err));
  }, []);

  // Smooth scroll to #about
  const handleAboutClick = (e) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ✔ Resume Upload Handler
  const handleResumeUpload = (e) => {
    let file = e.target.files[0];
    setUploadedResume(file);
  };

  // ✔ Resume Download Handler
  const handleResumeDownload = () => {
    if (!uploadedResume) {
      alert("Please upload a resume first!");
      return;
    }
    const fileURL = URL.createObjectURL(uploadedResume);
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = uploadedResume.name;
    link.click();
  };

  // ✔ Photo Upload Handler
  const handlePhotoUpload = (e) => {
    let file = e.target.files[0];
    setUploadedPhoto(URL.createObjectURL(file)); // temporary preview
  };

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
      {/* OUTER BACKGROUND */}
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
        {/* HERO BLOCK */}
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
            {/* NAVBAR */}
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
                      {/* ABOUT */}
                      <li
                        className="nav-link"
                        style={menuStyle("about")}
                        onMouseEnter={() => setHovered("about")}
                        onMouseLeave={() => setHovered(null)}
                        onClick={handleAboutClick}
                      >
                        About
                      </li>

                      {/* OTHER MENUS */}
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

            {/* HERO SECTION */}
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

                  {/* Resume Upload */}
                  <input
                    type="file"
                    onChange={handleResumeUpload}
                    style={{ marginTop: "16px", color: "white" }}
                  />

                  {/* Resume Download */}
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
                      display: "block",
                    }}
                    onClick={handleResumeDownload}
                  >
                    Download Uploaded Resume
                  </button>
                </div>

                {/* PHOTO AREA */}
                <div className="col-6 d-flex flex-column align-items-center">
                  <img
                    src={uploadedPhoto ? uploadedPhoto : dl}
                    alt="Uploaded Profile"
                    style={{
                      width: "280px",
                      height: "280px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "5px solid #c0bbbbff",
                      boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
                    }}
                  />

                  {/* Upload Photo Input */}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    style={{
                      marginTop: "20px",
                      color: "white",
                    }}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ABOUT SECTION */}
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
                    experience in building fast and beautiful interfaces with
                    React.js, HTML, CSS, JavaScript & Tailwind CSS.
                  </h4>
                </div>
              </div>
            </section>

            {/* JOKE BLOCK */}
            <div style={{ marginTop: "60px", color: "white", textAlign: "center" }}>
              <h2 style={{ fontSize: "32px" }}>😄 Random Joke</h2>

              {joke ? (
                <>
                  <p style={{ fontSize: "22px", marginTop: "20px" }}>{joke.setup}</p>
                  <p
                    style={{
                      fontSize: "26px",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    {joke.punchline}
                  </p>
                </>
              ) : (
                <p style={{ fontSize: "20px" }}>Loading joke...</p>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
