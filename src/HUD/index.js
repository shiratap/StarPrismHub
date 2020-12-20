import './index.css';
function HUD(props) {
	let buildComponentList = props.components.map((component, idx) => {
		if (
			component[0] === 'Intro-Component' &&
			props.state['Toggleable-Intro'].on === true
		)
			return <></>;
		else
			return (
				<>
					<div key={idx}>
						<input
							type='checkbox'
							id={component[0]}
							name={component[0]}
							onClick={props.toggle}
							checked={component[1].on}
						/>
						<label for={component[0]} data-checked={component[1].on}>
							{component[0].split('-')[0]}
						</label>
					</div>
				</>
			);
	});
	let buildModeList = Object.entries({
		'Font': props.state['Font'],
		'Dark-Mode': props.state['Dark-Mode'],
		'Prisoner-Mode': props.state['Prisoner-Mode'],
	}).map((component, idx) => (
		<>
			<div key={idx}>
				<input
					type='checkbox'
					id={component[0]}
					name={component[0]}
					onClick={props.toggle}
					checked={component[1].on}
				/>
				<label for={component[0]} data-checked={component[1].on}>
					{component[0].split('-').join(' ')}
					{component[1].values
						? Object.keys(component[1].values).filter(
								(value) => component[1].values[value] === true
						  )[0]
							? ': ' +
							  Object.keys(component[1].values).filter(
									(value) => component[1].values[value] === true
							  )[0]
							: ': Default'
						: ''}
				</label>
			</div>
			{component[1].on === true &&
			component[1].values &&
			Object.entries(component[1].values).length >= 1 ? (
				Object.entries(component[1].values).map((value, index) => (
					<div key={index} className='value' data-font={value[0]}>
						<input
							type='checkbox'
							name={component[1].values[value[0]]}
							checked={value[1].on}
						/>
						<label
							id={`${component[0]},${value[0]}`}
							for={component[1].values[value[0]]}
							onClick={props.toggleValues}
							data-checked={component[1].values[value[0]]}
						>
							{value[0]}
						</label>
					</div>
				))
			) : (
				<></>
			)}
		</>
	));

	return (
		<div
			id='filter'
			data-filterOn={props.filterOn}
			data-darkMode={props.state['Dark-Mode'].on}
		>
			<div className='container'>
				<div className='row'>
					<div className='segment-6'>
						<p>Components</p>
						{buildComponentList}
					</div>
					<div className='segment-6'>
						<p>Page Options</p>
						{buildModeList}
					</div>
				</div>
			</div>
		</div>
	);
}
export default HUD;
