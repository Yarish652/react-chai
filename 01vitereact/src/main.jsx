import React from 'react';
import ReactDOM from 'react-dom/client';

// Directly render an anchor element

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google'
);

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(reactElement);



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <a
//       href="https://google.com"
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{ color: 'blue', textDecoration: 'none', fontSize: '20px' }}
//     >
//       Visit Example
//     </a>
//   </React.StrictMode>
// );
