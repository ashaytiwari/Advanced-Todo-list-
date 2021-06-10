import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './Pages/LoginPage/LoginPage'
import Dashboard from './Pages/Dashboard/Dashboard'

// Creating date and time context for getting current date and time which will be used in other parts of the app
export const DateContext = React.createContext()
// export const TimeContext = React.createContext();

/**
 * code to get current Date in dd/mm/yyyy format
 */
let cYear, cDate, cMonth
const recentDate = new Date()
let currentDate = ''
cYear = recentDate.getFullYear()
cMonth = recentDate.getMonth() + 1
cDate = recentDate.getDate()
if (cMonth < 10) {
  cMonth = '0' + cMonth
}
if (cDate < 10) {
  cDate = '0' + cDate
}
currentDate = cDate + '/' + cMonth + '/' + cYear

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <DateContext.Provider value={currentDate}>
            <Route path="/" component={() => <LoginPage />} />
            <Route path="/dashboard" component={() => <Dashboard />} />
          </DateContext.Provider>
        </Switch>
      </Router>
    </div>
  )
}

export default App
