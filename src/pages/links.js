import React from "react";
import myLinks from '../components/mylinks';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas,fab);

const results = [];
const spicy = [];
var cardheight = 2;

myLinks.forEach((linked, index) => {
    if (linked.spicy) {
        spicy.push(
            <div key={index}>
                <a href={linked.url} class="links"><FontAwesomeIcon icon={linked.icon} />  {linked.name}</a>
            </div>
            );
    }
    else {
        results.push(
            <div key={index}>
                <a href={linked.url} class="links"><FontAwesomeIcon icon={linked.icon} />  {linked.name}</a>
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
        <h1>Spicy Links</h1>
        <div>{spicy}</div>
        <h1>Links</h1>
        <div>{results}</div>
</div>
)};

export default Links;

