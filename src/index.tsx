import * as React from 'react';
import * as ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

ReactDOM.render(
  <div>
    <App />
  </div>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
