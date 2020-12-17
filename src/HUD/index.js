import './index.css';
function HUD(props) {
	let buildComponentList = Object.entries(props.state).map(
		(componentName, idx) => {
			if (
				componentName[0] === 'Toggleable-Intro' ||
				(componentName[0] === 'Intro-Component' &&
					props.state['Toggleable-Intro'] === true) ||
				componentName[0] === 'Filter-Component' ||
				componentName[0] === 'Dark-Mode' ||
				componentName[0] === 'Prisoner-Mode'
			)
				return <></>;
			else
				return (
					<>
						<div key={idx}>
							<input
								type='checkbox'
								id={componentName[0]}
								name={componentName[0]}
								onClick={props.toggle}
								checked={componentName[1]}
							/>
							<label for={componentName[0]} data-checked={componentName[1]}>
								{componentName[0].split('-')[0]}
							</label>
						</div>
					</>
				);
		}
	);
	let buildModeList = Object.entries({
		'Dark-Mode': props.state['Dark-Mode'],
		'Prisoner-Mode': props.state['Prisoner-Mode'],
	}).map((componentName, idx) => (
		<>
			<div key={idx}>
				<input
					type='checkbox'
					id={componentName[0]}
					name={componentName[0]}
					onClick={props.toggle}
					checked={componentName[1]}
				/>
				<label for={componentName[0]} data-checked={componentName[1]}>
					{componentName[0].split('-').join(' ')}
				</label>
			</div>
		</>
	));

	return (
		<div
			id='filter'
			data-filterOn={props.filterOn}
			data-darkMode={props.state['Dark-Mode']}
		>
			<div className='container'>
				<div className='row'>
					<div className='segment-6'>
						<p>Toggle Components</p>
						{buildComponentList}
					</div>
					<div className='segment-6'>
						<p>Toggle Modes</p>
						{buildModeList}
					</div>
				</div>
			</div>
		</div>
	);
}
export default HUD;
