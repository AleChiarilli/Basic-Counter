import React from "react";
import "../../styles/index.css";



//create your first component
const Home = (props) => {
  return (
    <>
      <div className="background mx-auto">
      <div className="card">{props.element}</div>
        <div className="card">{props.num6}</div>
        <div className="card">{props.num5}</div>
        <div className="card">{props.num4}</div>
        <div className="card">{props.num3}</div>
        <div className="card">{props.num2}</div>
        <div className="card">{props.num}</div>
      </div>
    </>
  );
};

export default Home;
