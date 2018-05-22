import * as React from 'react';
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { InvoiceType } from './models/invoice'

import EthApp from './EthApp'
import BootstrapDemo from './BootstrapDemo'
import InvoiceApp from './InvoiceApp'

interface Props {
  invoice: InvoiceType
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);


@observer
class App extends React.Component<Props, {}> {
  render() {
    const { invoice } = this.props
    return (
      <Router>
        <div>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/ethapp">Eth App</Link></li>
            <li> <Link to="/invoiceapp">Invoice App</Link></li>
            <li> <Link to="/bootstrapdemo">Bootstrap Demo</Link></li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/ethapp" component={EthApp} />
          <Route path="/invoicedpp" component={InvoiceApp} />
          <Route path="/bootstrapdemo" component={BootstrapDemo} />
        </div>
      </Router>
    );
  }
}

export default App