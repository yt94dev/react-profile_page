import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './profile/TopNav';
// import App from './profile/App';
// import App from './team/App';
import App from './team-owner/App';

ReactDOM.render(
  <TopNav />,
  document.getElementById('nav-component')
);


ReactDOM.render(
    <App />,
  document.getElementById('app')
);
