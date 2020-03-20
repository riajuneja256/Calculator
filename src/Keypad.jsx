import React, { Component } from "react";
import './calc.css';

class Keypad_class extends Component{
    state = {};
    render(){
        return(

            <div className = "row container">
                <div className="padding_0 col s12">
                    <div className="padding_0 col s4 push-s4 calc_container">
                        <div className="padding_0 col s12">
                            
                            <div className="col s12 padding_0">
                                <div onClick={() => this.props.getData("AC")} id="clear" className="common_style center col s6 padding_0 ac abc">AC</div>
                                <div onClick={() => this.props.getData("/")} id="divide" className="common_style center col s3 padding_0 operator_style abc">/</div>
                                <div onClick={() => this.props.getData("*")} id="multiply" className="common_style center col s3 padding_0 operator_style abc">X</div>
                            </div>
                            <div className="col s12 padding_0">
                                <div onClick={() => this.props.getData(7)} id="seven" className="common_style center col s3 padding_0 numbers_style abc">7</div>
                                <div onClick={() => this.props.getData(8)} id="eight" className="common_style center col s3 padding_0 numbers_style abc">8</div>
                                <div onClick={() => this.props.getData(9)} id="nine" className="common_style center col s3 padding_0 numbers_style abc">9</div>
                                <div onClick={() => this.props.getData("-")} id="subtract" className="common_style center col s3 padding_0 operator_style abc">-</div>
                            </div>
                            <div className="col s12 padding_0">
                                <div onClick={() => this.props.getData(4)} id="four" className="common_style center col s3 padding_0 numbers_style abc">4</div>
                                <div onClick={() => this.props.getData(5)} id="five" className="common_style center col s3 padding_0 numbers_style abc">5</div>
                                <div onClick={() => this.props.getData(6)} id="six" className="common_style center col s3 padding_0 numbers_style abc">6</div>
                                <div onClick={() => this.props.getData("+")} id="add" className="common_style center col s3 padding_0 operator_style abc">+</div>
                            </div>
                            <div className="col s12 padding_0">
                                <div className="col s9 padding_0">
                                    <div className="col s12 padding_0">
                                        <div onClick={() => this.props.getData(1)} id="one" className="common_style center col s4 padding_0 numbers_style abc">1</div>
                                        <div onClick={() => this.props.getData(2)} id="two" className="common_style center col s4 padding_0 numbers_style abc">2</div>
                                        <div onClick={() => this.props.getData(3)} id="three" className="common_style center col s4 padding_0 numbers_style abc">3</div>
                                    </div>
                                    <div className="col s12 padding_0">
                                        <div onClick={() => this.props.getData(0)} id="zero" className="common_style center col s8 padding_0 numbers_style abc ddd">0</div>
                                        <div onClick={() => this.props.getData(".")} id="decimal" className="common_style center col s4 padding_0 numbers_style abc ddd">.</div>
                                    </div>
                                </div>
                                <div onClick={() => this.props.getData("=")} id="equals" className="col s3 padding_0 equalTo abc">=</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Keypad_class;
