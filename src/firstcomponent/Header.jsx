import React from "react";
import { useNavigate } from "react-router-dom"; 
import im from "../assets/nw.jpg";


function Header(){
const styles={
  background:{
  backgroundImage: `url(${im})`,   // <-- the image
      backgroundSize: "cover",         // fill the area
      backgroundPosition: "center",    // centre the image
      backgroundRepeat: "no-repeat",   // no tiling
      minHeight: "100vh",              // optional – make it full-screen
      padding: "20px",
}}
    const navigate = useNavigate();
     const handleClick = () =>{
    navigate("/Homepage"); 
    };
     const handleClick2 = () =>{
    navigate("/Loginpage"); 
    };
    return(
        <>
        <div style={styles.background}>
             <div style={{ display: 'flex',height:'40px',fontSize:'20px',justifyContent: 'space-around', backgroundColor: '#f0f0f0', padding: '10px' }}>
        <div style={{ marginRight:'280px'}}>Future UI</div>
        <div  onClick={handleClick}>Home</div>
        <div>Pages</div>
        <div>Portfolio</div>
        <div onClick={handleClick2}>Logout</div>
      </div>

        <div style={{ paddingTop:'20px',paddingBottom:'20px',paddingLeft:'10px',alignItems: 'flex-start',backgroundColor: '#ADD8E6',width: '11%',marginTop:'0px',display: 'flex',
  flexDirection: 'column',
  gap: '65px'}}>
      <div>Dashboard</div>
       <div>Charts</div>
        <div>Tables</div>
         <div>Report</div>
          <div>Setup</div>
        </div>
        </div>
        </>
    );
}

export default  Header;
