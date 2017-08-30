import React from 'react';

class Calculator extends React.Component {
	constructor(){
		super();

	 this.state = {num1: "", num2: ""};
	}
	setnum1(AS){
  const as = AS.target.value;
  this.setState({num1: as});
}
	setnum2(RS){
		const rs = RS.target.value;
		this.setState({num2: rs});
	}
	render() {
	
		return (
			<div>
			
				<div> num1 : <input OnChange = {this.setnum1.bind(this)} /></div>
				<div> num2 :<input OnChange = {this.setnum2.bind(this)} /></div>
				<div> Sum = {this.state.num1 + this.state.num2} </div>
			

			</div>
			
		);
	}
	}

export default Calculator;