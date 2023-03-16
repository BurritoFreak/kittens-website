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
  cardheight = (spicy.length+1.5)*80;
}
else {
  cardheight = (results.length+1.5)*80;
}


const Links = () => {
  return ( 
  <div class="cards-list">
    <div class="card 1" style={{height:cardheight}}>
      <div class="card_image">
        <img src="https://media.giphy.com/media/l3q2Sd4NmhlohESvm/giphy.gif" />
      </div>
      <div class="card_title title-white">
        <h1>Spicy Links</h1>
        <div>{spicy}</div>
      </div>
    </div>
    <div class="card 2" style={{height:cardheight}}>
      <div class="card_image">
        <img src="https://media.giphy.com/media/l3q2Sd4NmhlohESvm/giphy.gif" />
      </div>
      <div class="card_title title-white">
        <h1>Links</h1>
        <div>{results}</div>
      </div>
    </div>
  </div>
)};

export default Links;