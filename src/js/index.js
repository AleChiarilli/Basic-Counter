//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let num = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
const element = <FontAwesomeIcon icon={faClock} />

setInterval(function () {
  num++;
  if (num > 9) {
    num = 0;
    num2++;
    if (num2 > 9) {
      num2 = 0;
      num3++;
      if (num3 > 9) {
        num3 = 0;
        num4++;
        if (num4 > 9) {
          num4 = 0;
          num5++;
          if (num5 > 9) {
            num5 = 0;
            num6++;
            if (num6 > 9) {
                num6 = 0;
            }            
          }
        }
      }
    }
  }
  ReactDOM.render(
    <Home num={num} num2={num2} num3={num3} num4={num4} num5={num5} num6={num6} element={element}/>,
    document.querySelector("#app")
  );
}, 1000);


