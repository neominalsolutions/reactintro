import { Component, ReactNode } from 'react';

// constructor(props: any) {
// 	super(props);
// 	this.showMessage.bind(this);
// click+=OnButtonClick;
// }

type ClassComponentState = {
	counter: number;
};

type ClassComponentProps = {};

class ClassComponentSample extends Component<
	ClassComponentProps,
	ClassComponentState
> {
	// props,state // ekranda bind edilen değerlerin değişiminde state mekanizması olmadan react dom güncellemesi yapmıyor
	state: ClassComponentState = { counter: 0 };
	// contructor

	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor(props: ClassComponentProps) {
		super(props);
		this.increaseCount = this.increaseCount.bind(this);
	}

	// methods
	showMessage() {
		alert('show Message');
	}
	// state değiştiriğiniz içinde set state yazan methodlarda  this.increaseCount.bind(this); ile contructorda method class tanıtmak durumundayız.
	increaseCount() {
		this.setState({ counter: this.state.counter + 1 });
		console.log('deneme');
	}

	// lifecyle methods
	render(): ReactNode {
		return (
			<>
				<div className="active" style={{ padding: '0.5rem' }}>
					{/* interpolation ile model binding yaptık */}
					<p>{this.state.counter}</p>
					{/* event binding */}
					<button onClick={this.showMessage}>Show Message</button>
					<button onClick={this.increaseCount}>+</button>
				</div>
			</>
		);
	}
}

export default ClassComponentSample;
