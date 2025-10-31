import React from "react";

function Header(){
    return(
        <>
        <div style={{position:'fixed',top:'0',backgroundColor: 'yellow',width: '100%',top: 0,left: 0,right: 0,}}>
       <ul style={{ display: "flex",listStyle:'none',gap:'200px',width:'100%'}}>
        <li>home</li>
        <li>home2</li>
        <li>home4</li>
        <li>home5</li>
        <li>home6</li>
       </ul>
        </div>
        <div style={{backgroundColor: 'yellow',width: '50%',justifyContent:'center',textAlign:'center',marginTop:'80px'}}>
       <ul style={{ listStyle:'none',gap:'200px',width:'50%'}}>
        <li>home</li>
        <li>home2</li>
        
       </ul>
        </div>
        </>
    );
}

export default  Header;
