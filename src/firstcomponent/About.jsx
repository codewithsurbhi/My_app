import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Card from "../firstcomponent/Card";
function About() {
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
    return(
       <>
       <div>
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
export default About;