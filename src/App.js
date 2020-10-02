import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={() => <LoginPage />} />
          <Route path='/dashboard' component={() => <Dashboard />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
