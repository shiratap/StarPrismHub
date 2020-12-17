import './index.css';
function Header(props) {
	return (
		<>
			<div
				id='menu'
				className='container row'
				data-darkMode={props.state['Dark-Mode']}
			>
				<input
					type='checkbox'
					id='Toggleable-Intro'
					name='Toggleable-Intro'
					onClick={props.toggle}
					checked={props.state['Toggleable-Intro']}
				/>
				<label
					for='Toggleable-Intro'
					className='header-segment-4'
					data-darkMode={props.state['Dark-Mode']}
					data-checked={props.state['Toggleable-Intro']}
				>
					Always Keep Intro
				</label>

				<div
					id='header'
					className='header-segment-4'
					data-darkMode={props.state['Dark-Mode']}
				>
					Star Prism Hub
				</div>
				<input
					type='checkbox'
					id='Filter-Component'
					name='Filter-Component'
					onClick={props.toggle}
					checked={props.state['Filter-Component']}
				/>
				<label
					for='Filter-Component'
					className='header-segment-4'
					data-darkMode={props.state['Dark-Mode']}
					data-checked={props.state['Filter-Component']}
				>
					Toggle Filters
				</label>
			</div>
		</>
	);
}
export default Header;
