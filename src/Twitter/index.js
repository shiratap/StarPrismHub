import React, { useState } from 'react';
import { Timeline } from 'react-twitter-widgets';
import './index.css';

function Twitter(props) {
	return (
		<>
			<div id='Twitter' data-darkMode={props.darkMode}>
				<div className='container'>
					<div className='inner-container'>
						<Timeline
							dataSource={{
								sourceType: 'profile',
								screenName: 'starsmitten_',
							}}
							options={{
								theme: props.darkMode ? 'dark' : 'light',
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
export default Twitter;
