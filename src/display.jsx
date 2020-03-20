import React, { Component } from "react";
import './calc.css';

class Display extends Component{
    state= {};
    render(){
        return(
            <React.Fragment>
                <div className="Display row container mar_10" style={{ marginBottom: 0 }}>
                <div  id="display" className="common_style right-align col s4 push-s4 padding_0 display">
                    <input
                        className="right-align display"
                        type="text"
                        placeholder="0"
                        value={this.props.expression}
                        />
                </div>
            </div>
            </React.Fragment>
        );
    }

}
export default Display;
 