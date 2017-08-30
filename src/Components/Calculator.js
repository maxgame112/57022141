import React from 'react';

class Calculator extends React.Component {
	constructor(){
		super();

	 this.state = {XA: "", XB: ""};
	}
	setnum1(AS){
	  const as = AS.target.value;
	  this.setState({XA: as});
	}
	setnum2(RS){
		const rs = RS.target.value;
		this.setState({XB: rs});
	}
	render() {
	
		return (
			<div>
			
				<div> num1 : <input onChange = {this.setnum1.bind(this)} /></div>
				<div> num2 : <input onChange = {this.setnum2.bind(this)} /></div>
				sum : {this.state.XA + this.state.XB}
			

			</div>
			
		);
	}
	}

export default Calculator;