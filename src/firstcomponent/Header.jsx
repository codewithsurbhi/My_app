import React from "react";
import { useNavigate } from "react-router-dom";
import im from "../assets/nw.jpg";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DraggableTableButton, DropArea } from "../firstcomponent/DraggableTableButton"; // ye path ab sahi hoga

function Header() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/Homepage");
  const handleClick2 = () => navigate("/Loginpage");

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{
        backgroundImage: `url(${im})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "20px"
      }}>
        {/* Top Navbar */}
        <div style={{
          display: "flex",
          height: "60px",
          fontSize: "20px",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "rgba(255,255,255,0.95)",
          padding: "0 20px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          marginBottom: "20px"
        }}>
          <div style={{ fontWeight: "bold", marginRight: "280px" }}>Future UI</div>
          <div onClick={handleClick} style={{ cursor: "pointer" }}>Home</div>
          <div>Pages</div>
          <div>Portfolio</div>
          <div onClick={handleClick2} style={{ cursor: "pointer" }}>Logout</div>
        </div>

        <div style={{ display: "flex" }}>
          {/* Sidebar */}
          <div style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "20px",
            backgroundColor: "#e3f2fd",
            width: "12%",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
          }}>
            <div style={{ fontWeight: "bold" }}>Dashboard</div>
            <div>Charts</div>
            <div>Tables</div>
            <div>Report</div>
            <div>Setup</div>
            <DraggableTableButton />
          </div>

          {/* Main Content - Drop Area */}
          <DropArea>
            <div style={{ color: "white", margin: "60px 40px" }}>
              <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Welcome!</h1>
              <p style={{ fontSize: "24px" }}>Drag the green button from left → Drop here → Table will appear!</p>
            </div>
          </DropArea>
        </div>
      </div>
    </DndProvider>
  );
}

export default Header;