import './index.css';
import * as icons from '../assets/social-icons';

function Socials(props) {
	const buildSocials = [
		{ link: 'https://www.twitch.tv/starsmitten', name: 'Twitch' },
		{ link: 'https://www.youtube.com/c/starsmitten', name: 'Youtube' },
		{ link: 'https://twitter.com/starsmitten_', name: 'Twitter' },
		{ link: 'https://www.tiktok.com/@starsmitten?lang=en', name: 'Tiktok' },
		{ link: 'https://www.instagram.com/starsmitten_/', name: 'Instagram' },
		{
			link:
				'https://support.discord.com/hc/en-us/articles/212112068-Twitch-Integration-FAQ',
			name: 'Discord',
		},
	].map((icon) => (
		<>
			<a href={icon.link} target='_blank'>
				<img
					className='icons'
					data-darkMode={props.darkMode}
					// src={icons.default[(props.darkMode ? 'd' : 'l') + icon.name]}
					src={icons.default['l' + icon.name]}
				/>
			</a>
		</>
	));

	return (
		<div id='Socials' data-darkMode={props.darkMode}>
			<div className='container'>
				<div className='row'>{buildSocials}</div>
			</div>
		</div>
	);
}
export default Socials;
