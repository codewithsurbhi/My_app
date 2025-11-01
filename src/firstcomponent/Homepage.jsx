import React, { useState } from "react";

function Homepage() {
  const [count, setCount]=useState(0);
  return (
    <>
  <h2>Welcome to Home Page 🎉</h2>
  <h1>Count: {count}</h1>
  <button onClick={()=>setCount(count+1)}>increment</button>
  </>
  );
}

export default Homepage;