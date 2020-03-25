import React, {Component} from 'react';
import './calc.css';

class Decimalkey extends Component{
    render(){
        return(
                <div>
                    <div onClick={() => (this.props.val)} id={this.props.id} className="common_style center col s4 padding_0 numbers_style abc ddd">{this.props.val}</div>
                </div>

        );
    }
}
export default Decimalkey;
