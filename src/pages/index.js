import React from 'react';
import TwitchPlayer from '../components/twitchPlayer';

const Home = () => {
return (
	<div>
		<h1>Welcome to the internet</h1>
		<div class="two-boxes">
			<img height="600px" src="https://cdn.discordapp.com/attachments/1041632587430502422/1086047786488840222/IMG_1655.JPG" alt=""/>
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
