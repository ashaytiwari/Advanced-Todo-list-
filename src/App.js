import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={() => <LoginPage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
