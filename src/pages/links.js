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
    results.push(
        <div key={index}>
            <a href={linked.url} class="links"><FontAwesomeIcon icon={linked.icon} />  {linked.name}</a>
        </div>
    );
});

cardheight = (results.length+1.5)*100;

const Links = () => {
    return ( 
    <div class="cards-list" id="cards">
        <div>{results}</div>
</div>
)};

export default Links;

