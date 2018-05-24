import * as React from 'react';
import * as ReactDOM from 'react-dom';
import InvoiceEdit from './InvoiceEdit';
import Invoice from './models/invoice'

it('renders without crashing', () => {
  const invoice = Invoice.create({ currency: 'TWD' })
  const div = document.createElement('div');
  ReactDOM.render(<InvoiceEdit invoice={invoice} />, div);
});
