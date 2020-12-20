import './PrismHub.css';
import './fonts.css';
import React from 'react';
import Intro from './Intro';
import HUD from './HUD';
import Header from './Header';
import Twitch from './Twitch';
import Youtube from './Youtube';
import Socials from './Socials';
import Twitter from './Twitter';

class PrismHub extends React.Component {
	constructor() {
		super();
		this.state = {
			'Toggleable-Intro': { on: false },
			'Intro-Component': { on: true },
			'Filter-Component': { on: false },
			'Socials-Component': { on: true },
			'Twitch-Component': { on: true },
			'Youtube-Component': { on: true },
			'Twitter-Component': { on: true },
			'Dark-Mode': { on: false },
			'Prisoner-Mode': { on: false },
			'Font': {
				on: false,
				values: { Raleway: false, Dancing: false, Indie: false },
			},
			'Order': [
				'Socials-Component',
				'Twitch-Component',
				'Youtube-Component',
				'Twitter-Component',
			],
		};
		this.toggle = this.toggle.bind(this);
		this.toggleValues = this.toggleValues.bind(this);
		this.saveOrder = this.saveOrder.bind(this);
	}

	toggle(e) {
		if (
			e.target.id === 'Welcome' &&
			this.state['Toggleable-Intro'].on === false
		) {
			let copy = this.state;
			copy['Intro-Component'].on = true;
			localStorage.setItem('StarPrism', JSON.stringify(copy));
			setTimeout(() => {
				this.setState({ ['Intro-Component']: copy['Intro-Component'] });
			}, 1000);
		} else if (
			e.target.id === 'Welcome' &&
			this.state['Toggleable-Intro'].on === true
		) {
		} else if (
			e.target.id === 'Toggleable-Intro' &&
			this.state['Toggleable-Intro'].on === false
		) {
			let copy = this.state;
			copy[e.target.id].on = true;
			copy['Intro-Component'].on = true;
			localStorage.setItem('StarPrism', JSON.stringify(copy));
			this.setState({
				[e.target.id]: copy[e.target.id],
				['Intro-Component']: copy['Intro-Component'],
			});
		} else {
			if (this.state[e.target.id].on === false) {
				let copy = this.state;
				copy[e.target.id].on = true;
				localStorage.setItem('StarPrism', JSON.stringify(copy));
				this.setState({ [e.target.id]: copy[e.target.id] });
			} else {
				let copy = this.state;
				copy[e.target.id].on = false;
				localStorage.setItem('StarPrism', JSON.stringify(copy));
				this.setState({ [e.target.id]: copy[e.target.id] });
			}
		}
	}

	toggleValues(e) {
		let properties = e.target.id.split(',');
		let copy = this.state;
		if (this.state[properties[0]].values[properties[1]]) {
			copy[properties[0]].values[properties[1]] = false;
			localStorage.setItem('StarPrism', JSON.stringify(copy));
			this.setState({ [properties[0]]: copy[properties[0]] });
		} else {
			Object.keys(copy[properties[0]].values).forEach((value) => {
				copy[properties[0]].values[value] = false;
			});
			copy[properties[0]].values[properties[1]] = true;
			localStorage.setItem('StarPrism', JSON.stringify(copy));
			this.setState({ [properties[0]]: copy[properties[0]] });
		}
	}

	saveOrder(e) {}

	componentDidMount() {
		if (
			localStorage.getItem('StarPrism') &&
			Object.entries(JSON.parse(localStorage.getItem('StarPrism'))).length ===
				11
		) {
			let shortcut = JSON.parse(localStorage.getItem('StarPrism'));
			this.setState({
				'Toggleable-Intro': shortcut['Toggleable-Intro'],
				'Intro-Component': shortcut['Intro-Component'],
				'Filter-Component': shortcut['Filter-Component'],
				'Twitch-Component': shortcut['Twitch-Component'],
				'Youtube-Component': shortcut['Youtube-Component'],
				'Twitter-Component': shortcut['Twitter-Component'],
				'Dark-Mode': shortcut['Dark-Mode'],
				'Prisoner-Mode': shortcut['Prisoner-Mode'],
				'Font': shortcut['Font'],
				'Order': shortcut['Order'],
			});
		}
	}

	render() {
		return (
			<div
				id='app'
				data-font={
					Object.keys(this.state['Font'].values).filter(
						(value) => this.state['Font'].values[value] === true
					)[0]
						? Object.keys(this.state['Font'].values).filter(
								(value) => this.state['Font'].values[value] === true
						  )[0]
						: ''
				}
			>
				{this.state['Intro-Component'] && (
					<Intro toggle={this.toggle} darkMode={this.state['Dark-Mode'].on} />
				)}
				<Header state={this.state} toggle={this.toggle} />
				<HUD
					state={this.state}
					components={Object.entries(this.state).filter((component) => {
						if (
							[
								'Intro-Component',
								'Socials-Component',
								'Twitch-Component',
								'Youtube-Component',
								'Twitter-Component',
							].includes(component[0])
						)
							return component;
					})}
					toggle={this.toggle}
					toggleValues={this.toggleValues}
					filterOn={this.state['Filter-Component'].on}
				/>
				{this.state['Socials-Component'].on && (
					<Socials darkMode={this.state['Dark-Mode'].on} />
				)}
				{this.state['Twitch-Component'].on && (
					<Twitch toggle={this.toggle} state={this.state} />
				)}
				{this.state['Youtube-Component'].on && <Youtube toggle={this.toggle} />}
				{this.state['Twitter-Component'].on && (
					<Twitter darkMode={this.state['Dark-Mode'].on} />
				)}
			</div>
		);
	}
}
export default PrismHub;
