import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();