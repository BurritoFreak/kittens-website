import React from "react";
import TwitchPlayer from "../components/twitchPlayer";

const About = ({ match }) => {
return (
<>
<h1>About Me</h1>
<div class="two-boxes">
	<div>
	<img src="https://cdn.discordapp.com/attachments/1041632587430502422/1086047786488840222/IMG_1655.JPG" alt=""/>
	</div>
	<div class="about-text">
		<p>Hey my name is Kat, I am a content creator. I stream on twitch, and make content for onlyfans, as well as tiktok, instagram, reddit, and twitter. I love my job, and getting to interact with and meet new people!</p>
	</div>
</div>
<div class="two-boxes">
	<div class="about-text">
		<p>I love gaming. My favourite game is Zelda, but I play a lot of different games. I spend a lot of my free time working on my art; I love drawing and painting, and have been getting into digital art. Recently I've taken a liking to cars, and am looking forward to working on mine.
		</p>
	</div>
	<div>
		<img src="https://media.discordapp.net/attachments/1126595847245811824/1126633115218088077/IMG_2784.jpg?width=528&height=671" alt=""/>
	</div>
	</div>
<div class="two-boxes">
	<div>
		<img src="https://i.imgur.com/wuv5pb7.jpeg" alt=""/>
	</div>
	<div class="about-text">
		<p>I have also taken up the hobby of tattooing myself, which is lots of fun, expressing my artistic side outside of paper and canvas. Sometimes I stream my tattoos on twitch as well, while I chat with my wonderful community.</p>
	</div>
</div>
</>
);
};

export default About;
