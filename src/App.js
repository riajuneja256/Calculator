import React, { Component } from "react";
import Keypad_class from './Keypad';
import Display from './display';

class App extends Component{
  
    state= {
      expression : ""
    };

    
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
        <Display  expression = {this.state.expression}></Display>
        <Keypad_class getData = {this.handleStuff}></Keypad_class>
      </div>
    );
  }
}

export default App;
