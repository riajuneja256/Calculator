import React, {Component} from 'react';
import './calc.css';

class ACkey extends Component{
    render(){
        return(
                <div>
                    <div onClick={() => (this.props.val)} id={this.props.id} className="common_style center col s6 padding_0 ac abc">{this.props.val}</div>
                </div>
        );
    }
}
export default ACkey;
