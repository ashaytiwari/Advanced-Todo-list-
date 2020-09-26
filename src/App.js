import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import TodoPage from './components/TodoPage';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route path='/' exact component={() => <LoginPage />} />
          <Route path='/todoPage' exact component={() => <TodoPage />} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
