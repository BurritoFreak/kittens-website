import React from 'react';
import myLinks from '../components/mylinks';

const results = [];

myLinks.forEach((linked, index) => {
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