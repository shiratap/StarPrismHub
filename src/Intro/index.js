import './index.css';
import bestCeline from '../assets/bestCeline.mp4';
import CeliQueen from '../assets/CeliQueen.jpg';
function Intro(props) {
	return (
		<>
			<div className='section intro-section'>
				<a href='#Top-Star'>
					<div id='to-top-star'>Meet StarSmitten</div>
				</a>
				<video id='intro-video' muted loop autoPlay>
					<source src={bestCeline} type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</div>
			<div
				id='Top-Star'
				className='section intro-section'
				data-darkMode={props.darkMode}
			>
				<div className='main-card'>
					<div className='main-card-img'>
						<img className='card-img' src={CeliQueen} />
					</div>
					<div className='card-description'>
						<div className='card-description-text'>
							Meet StarSmitten, also known as Celine. One of the most caring
							people out there on TwitchTV with a great community behind her.
							Graduated from NorthWestern in 2016 with a Communications degree
							and a minor in Business. Celine has been praised for her caring
							and analytical personality, with insightful perspectives and
							advice on interpersonal interactions. One of the most emotionally
							intelligent people you will meet.
						</div>
						<div className='card-description-text'>
							StarSmitten's favorite games are Digimon World, Spyro, Klonoa,
							Pokemon, Monster Hunter World, League of Legends, Valorant, and
							World of Warcraft. We all welcome you to the Star Prism!
						</div>

						<a href='#menu' onClick={props.toggle}>
							<div id='Welcome'>To the Prism</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
export default Intro;
