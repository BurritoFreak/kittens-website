import React from 'react';
import myLinks from '../components/mylinks';

const results = [];
const spicy = [];

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

const Links = () => {
  return <>
  <h1>Links</h1>
  <div>{results}</div>
  <h1>Spicy Links</h1>
  <div>{spicy}</div>
  </>
};

export default Links;