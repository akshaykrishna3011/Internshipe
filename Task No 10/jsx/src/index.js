// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';

// 1. Simple JSX element
const heading = <h1>Hello, JSX!</h1>;

// 2. JSX element with dynamic content
const name = "Akku";
const greeting = <p>Welcome, {name}!</p>;

// 3. JSX element with attributes and styles
const styledDiv = (
  <div style={{ color: 'white', backgroundColor: 'teal', padding: '10px' }}>
    This is a styled JSX div
  </div>
);

// 4. JSX element with a list
const fruits = ['Apple', 'Banana', 'Cherry'];
const fruitList = (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);

// 5. Nested JSX elements
const app = (
  <div>
    {heading}
    {greeting}
    {styledDiv}
    {fruitList}
  </div>
);

// Render JSX to the DOM
const container = document.getElementById('root');
const root = createRoot(container);
root.render(app);
