import React from 'react';
import reactDom from 'react-dom';
import App from './App';
import './index.scss';

reactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, document.getElementById("root"));