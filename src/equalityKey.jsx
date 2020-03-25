import React, {Component} from 'react';
import './calc.css';

class EqualityKey extends Component{
    render(){
        return(
                <div>
                    <div onClick={() => (this.props.val)} id={this.props.id} className="common_style center col s12 padding_0 equalTo abc">{this.props.val}</div>
                </div>

        );
    }
}
export default EqualityKey;
