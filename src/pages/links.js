import React from 'react';
import myLinks from '../components/mylinks';

const results = [];
const spicy = [];
var cardheight = 2;

myLinks.forEach((linked, index) => {
  if (linked.spicy) {
    spicy.push(
      <div key={index}>
      <a href={linked.url} class="links">{linked.name}</a>
      </div>
    );
  }
  else {
  results.push(
    <div key={index}>
      <a href={linked.url} class="links">{linked.name}</a>
    </div>
  );
  };
});

if (spicy.length > results.length) {
  cardheight = (spicy.length+1.5)*100;
}
else {
  cardheight = (results.length+1.5)*100;
}


const Links = () => {
  return ( 
  <div class="cards-list" id="cards">
    <div class="card 1" style={{height:cardheight}}>
      <div class="card_image">
        <img src="https://cdn.discordapp.com/attachments/1041632587430502422/1086087826451468369/79258b821e72f84d1be8490c5a6f18f4.png" />
      </div>
      <div class="card_title title-white">
        <h1>Spicy Links</h1>
        <div>{spicy}</div>
      </div>
    </div>
    <div class="card 2" style={{height:cardheight}}>
      <div class="card_image">
        <img src="https://cdn.discordapp.com/attachments/1041632587430502422/1086087551221243954/FsAJQ7.png" />
      </div>
      <div class="card_title title-white">
        <h1>Links</h1>
        <div>{results}</div>
      </div>
    </div>
  </div>
)};

export default Links;