import React, { useState } from "react";
import ss from "../assets/banner1.jpg";
import ed from "../assets/education1.jpg";
import lg from "../assets/sslogo.jpg";
import './Loginpage.css';
import Card from "../firstcomponent/Card";


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
  
  const cardsData = [
    {
      image: "ed",
      title: "Education",
      description: "B.Tech",
      buttonText: "Read More",
      
    },
    {
      title: "Skills",
      description: "React.js",
      buttonText: "See All",
      
    },
    {
      title: "Experience",
      description: "Frontend Developer",
      buttonText: "Read More",
    
    },
    {
      title: "Contact",
      description: "Email",
      buttonText: "Read More",
    
    }
  ];
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
                <li className="nav-link"style={{ color: 'blue', fontWeight: '600', paddingLeft: '10px', fontSize: '15px' }}> Education</li>
                 <li className="nav-link"style={{ color: 'blue', fontWeight: '600', paddingLeft: '10px', fontSize: '15px' }}> Skills</li>
                 <li  className="nav-link" style={{ color: 'blue', fontWeight: '600', paddingLeft: '10px', fontSize: '15px' }}> Work Experience</li>
                 <li className="nav-link" style={{ color: 'blue', fontWeight: '600', paddingLeft: '10px', fontSize: '15px' }}> Contact</li>
                 
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
      <section>
        <div style={{height:'100px'}}>fsdgdg</div>
      </section>
      <section className="container my-5">
          <div className="row justify-content-center">
            {cardsData.map((card, index) => (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <Card
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  buttonText={card.buttonText}
                  onClick={card.onClick}
                />
              </div>
            ))}
          </div>
        </section>
      </div>


    </>
  );
}

export default Homepage;