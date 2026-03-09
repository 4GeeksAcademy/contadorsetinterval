import React from "react";


import rigoImage from "../../img/rigo-baby.jpg";


function Home({ contador }) {

	
 
  const num1 = Math.floor(contador / 10000) % 10; 
  const num2 = Math.floor(contador / 1000) % 10;
  const num3 = Math.floor(contador / 100) % 10;
  const num4 = Math.floor(contador / 10) % 10;
  const num5 = contador % 10; 

  return (
    <div className="counter">
      <div className="digito">{num1}</div>
      <div className="digito">{num2}</div>
      <div className="digito">{num3}</div>
      <div className="digito">{num4}</div>
      <div className="digito">{num5}</div>
    </div>
  );
}

export default Home;




