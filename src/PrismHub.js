import './PrismHub.css';
import React from 'react';
import Intro from './Intro';
import HUD from './HUD';
import Header from './Header';
import Twitch from './Twitch';
import Youtube from './Youtube';
import Socials from './Socials';

class PrismHub extends React.Component {
	constructor() {
		super();
		this.state = {
			'Toggleable-Intro': false,
			'Intro-Component': true,
			'Filter-Component': false,
			'Socials-Component': true,
			'Twitch-Component': true,
			'Youtube-Component': true,
			'Dark-Mode': false,
			'Prisoner-Mode': false,
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle(e) {
		if (e.target.id === 'Welcome' && this.state['Toggleable-Intro'] === false) {
			let copy = this.state;
			copy['Intro-Component'] = true;
			localStorage.setItem('StarPrism', JSON.stringify(copy));
			setTimeout(() => {
				this.setState({ 'Intro-Component': false });
			}, 1000);
		} else if (
			e.target.id === 'Welcome' &&
			this.state['Toggleable-Intro'] === true
		) {
		} else if (
			e.target.id === 'Toggleable-Intro' &&
			this.state['Toggleable-Intro'] === false
		) {
			let copy = this.state;
			copy[e.target.id] = true;
			copy['Intro-Component'] = true;
			localStorage.setItem('StarPrism', JSON.stringify(copy));
			this.setState({ [e.target.id]: true, ['Intro-Component']: true });
		} else {
			if (this.state[e.target.id] === false) {
				let copy = this.state;
				copy[e.target.id] = true;
				localStorage.setItem('StarPrism', JSON.stringify(copy));
				this.setState({ [e.target.id]: true });
			} else {
				let copy = this.state;
				copy[e.target.id] = false;
				localStorage.setItem('StarPrism', JSON.stringify(copy));
				this.setState({ [e.target.id]: false });
			}
		}
	}

	componentDidMount() {
		if (
			localStorage.getItem('StarPrism') &&
			Object.entries(JSON.parse(localStorage.getItem('StarPrism'))).length === 8
		) {
			let shortcut = JSON.parse(localStorage.getItem('StarPrism'));
			this.setState({
				'Toggleable-Intro': shortcut['Toggleable-Intro'],
				'Intro-Component': shortcut['Intro-Component'],
				'Filter-Component': shortcut['Filter-Component'],
				'Twitch-Component': shortcut['Twitch-Component'],
				'Youtube-Component': shortcut['Youtube-Component'],
				'Dark-Mode': shortcut['Dark-Mode'],
				'Prisoner-Mode': shortcut['Prisoner-Mode'],
			});
		}
	}

	render() {
		return (
			<>
				{this.state['Intro-Component'] && (
					<Intro toggle={this.toggle} darkMode={this.state['Dark-Mode']} />
				)}
				<Header state={this.state} toggle={this.toggle} />
				<HUD
					state={this.state}
					toggle={this.toggle}
					filterOn={this.state['Filter-Component']}
				/>
				{this.state['Socials-Component'] && (
					<Socials darkMode={this.state['Dark-Mode']} />
				)}
				{this.state['Twitch-Component'] && <Twitch toggle={this.toggle} />}
				{this.state['Youtube-Component'] && <Youtube toggle={this.toggle} />}
			</>
		);
	}
}
export default PrismHub;
