import React from "react";
import { useNavigate } from "react-router-dom";
import './Loginpage.css';
function Loginpage(){
     const navigate = useNavigate();
     const handleClick = () =>{
    navigate("/Header"); 
    };
     
    return(
        <>
        <div>
            <p>LoginPage</p>
           <form>
            <input type="email" placeholder="Email"/><br/>
            <input type="password" placeholder="password"/><br/>
            <button className='loginbutton' style={{border:'1px'}}  onClick={handleClick}>Submit</button>
           
           </form>
        </div>
        </>
    );
}
export default  Loginpage;