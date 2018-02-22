import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import TimerView from './components/timerView';

const target = document.getElementById('app');
const appState = new Store();

setInterval(() => { appState.current = Date.now() }, 1000);

ReactDOM.render(<TimerView appState={appState} />, target);
