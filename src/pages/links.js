import React from 'react';
import myLinks from '../components/mylinks';

const templinks = [{
  "name": "insta",
  "url": "https://www.instagram.com/emokitten_xoxo/"
},{
  "name": "insta",
  "url": "https://www.instagram.com/emokitten_xoxo/"
},{
  "name": "insta",
  "url": "https://www.instagram.com/emokitten_xoxo/"
},{
  "name": "insta",
  "url": "https://www.instagram.com/emokitten_xoxo/"
},{
  "name": "insta",
  "url": "https://www.instagram.com/emokitten_xoxo/"
}]

const results = [];

  templinks.forEach((linked, index) => {
    results.push(
      <div key={index}>
        <a href={linked.url} class="links">{linked.name}</a>
      </div>,
    );
  });
  
  const Links = () => {
    return <div>{results}</div>;
  };

export default Links;