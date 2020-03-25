import React, { Component } from "react";
import Display from './display';
import Heading from './Heading';
import NumberKey from "./NumberKey";
import OperatorKey from "./operatorKey";
import ACkey from "./ACkey";
import EqualityKey from "./equalityKey";
import NumberKey_123 from "./num_123";
import Zerokey from "./zeroKey";
import Decimalkey from "./decimal_Key";
import "./calc.css";

class App extends Component{
  
    state= {
      expression : ""
    };
    componentDidMount(){
      let response = prompt('whats your name')
      this.setState({
        userName: response
      })
    }
    
    handleStuff = (key) =>{
        
      var temp = this.state.expression + key
      if(key === "AC"){
        console.log(key+" got pressed");
        this.setState({expression : ""})
      }
      else if(key === "="){
        let sum = eval(this.state.expression).toString();
        this.setState({expression: sum});
      }
      else if(key === "+" || key === "-" || key === "/" || key === "*")
      {
        console.log(key+" got pressed");
        this.setState({expression: temp})
        var countoperator = true;
      }
      else {
        if(this.state.expression == "" && key === 0){
          this.setState({expression: ""});
        }
      else if(key === "."){
        var count = true;
        if(this.state.expression.endsWith(".") == false){
          if(count == true){ 
            this.setState({expression: temp});
            count = false;
            
          }
          else if(this.state.expression.includes("+" || "-" || "/" || "*") == true && count == false){
            this.setState({expression: temp});
            
            }
            else{
              console.log("No operator present, so decimal doubling not allowed");
            }
  
        }
        else{
          console.log("cant print decimal as last caharcater is also decimal");
        }
     
      }
        
        else{
          this.setState({expression: temp})
        }
     }
     
    };

    render(){
    return (
      <div className="App">
        <Heading userName={this.state.userName}></Heading>
        <div> 
          <Display  expression = {this.state.expression}></Display>
          <div className = "row container">
            <div className="padding_0 col s12">
              <div className="padding_0 col l4 m8 s12 push-l4 push-m2 calc_container">
                  <div className="padding_0 col s12">
                      <div className="col s12 padding_0">
                          <ACkey val = {"AC"} id = {"clear"}/>
                          <OperatorKey val = {"/"} id = {"divide"} />
                          <OperatorKey val = {"*"}  id = {"multiply"}/>
                      </div>
                      <div className="col s12 padding_0">
                          <NumberKey val = {7} id = {"seven"}/> 
                          <NumberKey val = {8} id = {"eight"}/>
                          <NumberKey val = {9} id = {"nine"}/>
                          <OperatorKey val = {"-"} id = {"subtract"}/>
                      </div>
                      <div className="col s12 padding_0">
                        <NumberKey val = {4} id = {"four"}/>
                        <NumberKey val = {5} id = {"five"}/>
                        <NumberKey val = {6} id = {"six"}/>
                        <OperatorKey val = {"+"} id = {"add"}/>
                      </div>
                      <div className="col s12 padding_0">
                        <div className="col s9 padding_0">
                          <div className="col s12 padding_0">
                            <NumberKey_123 val = {1} id = {"one"}/>
                            <NumberKey_123 val = {2} id = {"two"}/>
                            <NumberKey_123 val = {3} id = {"three"}/>
                          </div>
                          <div className="col s12 padding_0">
                            <Zerokey val = {0} id = {"zero"}/>
                            <Decimalkey val = {"."} id = {"decimal"}/>
                          </div>
                        </div>
                        <div className="col s3 padding_0">
                          <EqualityKey val = {"="} id = {"equals"}/> 
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
