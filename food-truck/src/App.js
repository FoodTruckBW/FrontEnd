import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import LogIn from "./components/LogIn";
import SignUpForm from "./components/SignUpForm";
import './App.css'

import TruckForm from './components/TruckForm'
import FoodTruck from './components/trucks'
import PrivateRoute from './utils/privateRoute'

const App = () => {
  return (
    <div className='app-container'>
      <nav>
            <ul>
              <li>
              <Link to="/SignUp">Sign Up</Link>
              </li>
              <li>
                <Link to="/LogIn">Log In</Link>
              </li>
              <li>
                <Link to="/truck-form">Add Truck</Link>
              </li>
            </ul>
          </nav>
      <h1>Food Truck Tracker</h1>
          <Route exact path="/SignUp">
            <SignUpForm />
          </Route>
          <Router>
            <div className="routes">
              <Route exact path="/truck-form" component={TruckForm} />
              <PrivateRoute exact path="/trucks" component={FoodTruck} />
              <Route path="/LogIn" component={LogIn} />
        </div>
        </Router>  
    </div>
  );
};
export default App;