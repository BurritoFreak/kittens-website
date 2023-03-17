import React from 'react';
import TwitchPlayer from '../components/twitchPlayer';

const Home = () => {
return (
	<div>
		<h1>Welcome to the internet</h1>
		<div class="two-boxes">
			<img src="https://i.imgur.com/JuDcwNx.jpeg" alt=""/>
			<p>sffgfdgfgfdgfdsgfsgs</p>
		</div>
		<h1>Twitch</h1>
		<div style={{display:"flex",justifyContent:"center"}}>
			<TwitchPlayer />
		</div>
	</div>
);
};

export default Home;
