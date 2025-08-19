import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const container = document.getElementById("app");
console.log("HERE");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}