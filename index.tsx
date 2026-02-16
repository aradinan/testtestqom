import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Suppress "ResizeObserver loop completed with undelivered notifications" error.
// This is typically a benign browser warning occurring when layout changes (like Map resizing)
// happen faster than the observer can report in a single frame.
const originalError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === 'string' && 
    (args[0].includes('ResizeObserver loop') || 
     args[0].includes('ResizeObserver loop completed with undelivered notifications') ||
     args[0].includes('ResizeObserver loop limit exceeded'))
  ) {
    return;
  }
  originalError(...args);
};

window.addEventListener('error', (e) => {
  if (
    e.message === 'ResizeObserver loop completed with undelivered notifications.' ||
    e.message === 'ResizeObserver loop limit exceeded' ||
    e.message.includes('ResizeObserver loop')
  ) {
    e.stopImmediatePropagation();
    e.preventDefault(); // Sometimes required to stop console noise
  }
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);