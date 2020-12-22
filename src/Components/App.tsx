import React from 'react';
import Nav from './Nav';
import { HashRouter as Router, Route } from 'react-router-dom';
import NavLinks from './NavLinks';

function App() {
  return (
    <>
      <Router>
        <Nav />
        {NavLinks().map(link =>
          <Route exact path={link.url} key={link.id} component={link.component} />)}
      </Router>
    </>
  );
}

export default App;
