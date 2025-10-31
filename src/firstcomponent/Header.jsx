import React from "react";
import { useNavigate } from "react-router-dom"; 

function Header(){
    const navigate = useNavigate();
     const handleClick = () =>{
    navigate("/Homepage"); 
    };
     const handleClick2 = () =>{
    navigate("/Loginpage"); 
    };
    return(
        <>
        <div style={{backgroundImage: `url('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d.jpg')`, backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",}}>
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
