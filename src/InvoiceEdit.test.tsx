import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Invoice from './models/invoice'

it('renders without crashing', () => {
  const invoice = Invoice.create({ currency: 'TWD' })
  const div = document.createElement('div');
  ReactDOM.render(<App invoice={invoice} />, div);
});
