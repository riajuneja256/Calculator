import React,{ Component } from "react";
import './calc.css';


function Heading(props) {
    
    return(
    <div className="row container center heading">Hi {props.userName}</div>
    );
  }

export default Heading;