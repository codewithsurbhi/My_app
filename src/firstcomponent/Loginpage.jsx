import React from "react";
import './Loginpage.css';
function Loginpage(){
    return(
        <>
        <div>
            <p>LoginPage</p>
           <form>
            <input type="email" placeholder="Email"/><br/>
            <input type="password" placeholder="password"/><br/>
            <button className='loginbutton' style={{border:'1px'}}>Submit</button>
           
           </form>
        </div>
        </>
    );
}
export default  Loginpage;