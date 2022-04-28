import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

let root;
const container = document.getElementById('root');

if (container === null) {
	root = createRoot(document.createElement('Unable to retrieve application'));
} else {
	root = createRoot(container);
} 

root.render(<App />);