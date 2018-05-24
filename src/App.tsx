import * as React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import EthApp from './EthApp'
import MuiDemo from './MuiDemo'
import InvoiceApp from './InvoiceApp'
import './App.css'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="menulist">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/ethapp">Eth App</NavLink>
            <NavLink to="/invoiceapp">Invoice App</NavLink>
            <NavLink to="/muidemo">MaterialUI Demo</NavLink>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/ethapp" component={EthApp} />
          <Route path="/invoicedpp" component={InvoiceApp} />
          <Route path="/muidemo" component={MuiDemo} />
        </div>
      </Router>
    );
  }
}

export default App
