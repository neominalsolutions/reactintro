import React, { Component, ReactNode } from 'react';

// constructor(props: any) {
// 	super(props);
// 	this.showMessage.bind(this);
// click+=OnButtonClick;
// }

type ClassComponentState = {
	counter: number;
};

type ClassComponentProps = {
	sx?: React.CSSProperties;
};

class ClassComponentSample extends Component<
	ClassComponentProps,
	ClassComponentState
> {
	// props,state // ekranda bind edilen değerlerin değişiminde state mekanizması olmadan react dom güncellemesi yapmıyor
	state: ClassComponentState = { counter: 0 };
	// contructor
	controller = new AbortController(); // bu sınıf ile js API network isteklerin yönetimi sağlanır.

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

	componentDidMount(): void {
		console.log('doma girişte 1 kereye mahsus tetiklenir');
		// component doma ilk girişte doma basılacak olan dinamik verileri , api call işlemlerini burada yaparız.

		fetch('https://jsonplaceholder.typicode.com/posts', {
			signal: this.controller.signal,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('data', data);
			});
		this.setState({ counter: 1 });
	}

	componentDidUpdate(
		prevProps: Readonly<ClassComponentProps>,
		prevState: Readonly<ClassComponentState>,
		snapshot?: any
	): void {
		console.log(
			'state değişimi gerçekleşrğinde tetiklenir.',
			prevState,
			this.state
		);
	}

	componentWillUnmount(): void {
		console.log('component domdan çıktığında tetiklenir.');
		this.controller.abort(); // signal kesme işlemi
	}

	// lifecyle methods state değişiminde tekrar render almak için tetiklenen component life cycle method
	render(): ReactNode {
		console.log('render');
		return (
			<>
				<div className="active" style={this.props.sx}>
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
