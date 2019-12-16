import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UseState from './screens/UseState';
import Home from './screens/Home';

const styles = {
  wrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: 0,
  },
  menu: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    maxWidth: 200,
    background: 'rgba(0,0,0,0.1)',
    padding: 20,
    boxSizing: 'border-box',
  },
  link: {

  }
};

function App() {
  return (
    <Router>
    <div style={styles.wrapper}>
      <div style={styles.menu}>
        <Link to="/useState">useState</Link>
      </div>
      <Route exact path="/" component={Home} />
      <Route exact path="/useState" component={UseState} />
    </div>
    </Router>
  );
}

export default App;
