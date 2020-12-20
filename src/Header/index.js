import './index.css';
function Header(props) {
	return (
		<>
			<div
				id='menu'
				className='container row'
				data-darkMode={props.state['Dark-Mode'].on}
			>
				<input
					type='checkbox'
					id='Toggleable-Intro'
					name='Toggleable-Intro'
					onClick={props.toggle}
					checked={props.state['Toggleable-Intro'].on}
				/>
				<label
					for='Toggleable-Intro'
					className='header-segment-4'
					data-darkMode={props.state['Dark-Mode']}
					data-checked={props.state['Toggleable-Intro'].on}
				>
					Always Keep Intro
				</label>
				<div
					id='header'
					className='header-segment-4'
					data-darkMode={props.state['Dark-Mode'].on}
				>
					<div>Star Prism Hub</div>
					<div>A fan made app</div>
				</div>
				<input
					type='checkbox'
					id='Filter-Component'
					name='Filter-Component'
					onClick={props.toggle}
					checked={props.state['Filter-Component'].on}
				/>
				<label
					for='Filter-Component'
					className='header-segment-4'
					data-darkMode={props.state['Dark-Mode'].on}
					data-checked={props.state['Filter-Component'].on}
				>
					Options
				</label>
			</div>
		</>
	);
}
export default Header;
