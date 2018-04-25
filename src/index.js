import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Begin from './Begin/Begin'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Begin />, document.getElementById('root'));
registerServiceWorker();
