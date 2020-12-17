import './App.css';
import React from 'react';
import PrismHub from './PrismHub';
import celiLetsGo from './assets/celiLetsGo.gif';
import celiSnow from './assets/celiSnow.gif';

class App extends React.Component {
	constructor() {
		super();
		this.state = { loading: true };
	}
	componentDidMount() {
		demoAsyncCall().then(() => this.setState({ loading: false }));
	}

	render() {
		const { loading } = this.state;

		if (loading) {
			return (
				<>
					<div className='background'>
						<div className='loading-container'>
							<div className='loading'>
								<div>Loading</div>
								<img src={celiLetsGo} />
								<img src={celiSnow} />
								<img src={celiLetsGo} />
							</div>
						</div>
					</div>
				</>
			);
		}

		return (
			<>
				<PrismHub />
			</>
		);
	}
}
function demoAsyncCall() {
	return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}
export default App;
