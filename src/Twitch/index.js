import React, { useState } from 'react';
import twitchLogo from '../assets/twitch.png';
import starprism from '../assets/prism.gif';

import './index.css';

function Twitch() {
	return (
		<>
			<div className='container twitch'>
				<div className='inner-Component'>
					<div className='section-title'>
						<a href='https://www.twitch.tv/starsmitten' target='_blank'>
							<div className='logos'>
								<img
									className='twitch-section twitch-img'
									src={starprism}
								></img>
								<img
									className='twitch-section twitch-logo'
									src={twitchLogo}
								></img>
								<img
									className='twitch-section twitch-img right-img'
									src={starprism}
								></img>
							</div>
						</a>
					</div>
					<iframe
						title='stream'
						id='stream'
						autoplay='false'
						src='https://player.twitch.tv/?channel=starsmitten&parent=localhost&parent=shiratap.github.io'
						frameborder='0'
						allowfullscreen='true'
						scrolling='no'
					></iframe>

					<iframe
						title='twitch-chat'
						id='chat_embed'
						src='https://www.twitch.tv/embed/starsmitten/chat?parent=localhost&parent=shiratap.github.io'
					></iframe>
				</div>
			</div>
		</>
	);
}
export default Twitch;
