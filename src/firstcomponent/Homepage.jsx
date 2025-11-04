import React, { useState } from "react";

function Homepage() {
  const [count, setCount]=useState(0);
  const [hovered, setHovered] = useState(null);

  const menuStyle = (id) => ({
    padding: '10px 20px',
    borderRadius: '8px',
    color: hovered === id ? 'yellow' : 'white',    
  });
  return (
    <>
<section className="homepage">
  <div className="bg-danger container-fluid">
    <div className="row">
      <div className="col-4">
        <p>Surbhi</p>
      </div>
      <div className="col-2">
       <p
              style={menuStyle('edu')}
              onMouseEnter={() => setHovered('edu')}
              onMouseLeave={() => setHovered(null)}
            >
              Education
            </p>
      </div>
      <div className="col-2">
        Skills
      </div>
      <div className="col-2">
        Work Experience
      </div>
      <div className="col-2">
        Contact
      </div>
    </div>
  </div>
</section>
  
  </>
  );
}

export default Homepage;