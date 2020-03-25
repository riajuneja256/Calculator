import React, {Component} from 'react';
import './calc.css';

class OperatorKey extends Component{
    render(){
        return(
                <div>
                    <div onClick={() => (this.props.val)} id={this.props.id} className="common_style center col s3 padding_0 operator_style abc">{this.props.val}</div>
                </div>

        );
    }
}
export default OperatorKey;



 