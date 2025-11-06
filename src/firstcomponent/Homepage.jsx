import React, { useState } from "react";
import ss from "../assets/banner1.jpg";
import lg from "../assets/sslogo.jpg";
import './Loginpage.css';


function Homepage() {
  const styles = {
    background: {
      backgroundImage: `url(${ss})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      padding: "20px",
    }
  }
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState(null);

  const menuStyle = (id) => ({

    borderRadius: '8px',
    color: hovered === id ? 'red' : 'blue',
  });
  return (
    <>
    <div style={styles.background}>
      <section className="homepage">
        <div  className="bg-danger container-fluid">
          <div className="row">

            <div className="col-3">
              <span><img src={lg} alt="" style={{ height: '50px', width: '69px' }} /></span>
              <span style={{ color: 'blue', fontWeight: '700', paddingLeft: '10px', fontSize: '31px' }}>Surbhi</span>
            </div>
            <div className="col-6">
              <div>
              <ul className="nav d-flex justify-content-around align-items-center m-0 p-0">
                <li className="nav-link"> Education</li>
                 <li className="hoverr"> Skills</li>
                 <li  style={{ color: 'blue', fontWeight: '600', paddingLeft: '10px', fontSize: '20px' }}> Work Experience</li>
                 <li> Contact</li>
                 
              </ul>
              </div>
            </div>
            
           
            
            
            <div className="col-3">
              <input type="search" placeholder=" search" class="rounded-4" />
              <button class="rounded-4" style={{ width: '20%', marginLeft: '5px' }}>Search</button>
            </div>
          </div>
        </div>
      </section>
      </div>


    </>
  );
}

export default Homepage;