import './index.css';
import YTLogo from '../assets/YTLogo.png';

function Youtube() {
	return (
		<>
			<div className='container' id='YT'>
				<div className='content-component'>
					<div className='inner-Component'>
						<div id='YT-title' className='section-title '>
							<div className='logos'>
								<a href='https://www.youtube.com/c/starsmitten' target='_blank'>
									<img className='yt-section YTLogo' src={YTLogo}></img>
								</a>
							</div>
						</div>
						<div id='YT-description'>
							This is a playlist of StarSmitten's YouTube Uploads. You can
							change which video of the playlist you're watching on the top
							right of the player.
						</div>

						<iframe
							id='YTvideo'
							src='https://www.youtube.com/embed/vgyIf4UInWE?list=UUblGuuU5c-CYqasi25xXXVQ'
							frameborder='0'
							controls='1'
							allow='accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</div>
				</div>
			</div>
		</>
	);
}
export default Youtube;
