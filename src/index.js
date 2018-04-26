import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();