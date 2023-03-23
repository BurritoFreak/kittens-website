import React from 'react';
import TwitchPlayer from '../components/twitchPlayer';

const Home = () => {
return (
	<div>
		<h1>Welcome to the internet</h1>
		<div class="two-boxes">
			<img height="600px" src="https://cdn.discordapp.com/attachments/1041632587430502422/1086047786488840222/IMG_1655.JPG" alt=""/>
			<div class="frontpage-text">
				<p>Hey my name is Kat, a smol goth girl that loves art and cars, with a tendency to overshare. Check out my links if you'd like to see more of me!</p>
			</div>
		</div>
		<h1>Twitch</h1>
		<div class="TwitchBox" style={{display:"flex",justifyContent:"center"}}>
			<TwitchPlayer />
		</div>
		<h1>Social Feed</h1>
		<div id="curator-feed-default-feed-layout">
			<a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a>
		</div>
	</div>
);
};

export default Home;
