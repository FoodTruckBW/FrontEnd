import React from "react";
import {Route, Link} from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUpForm from "./components/SignUpForm";
import './App.css'

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
            </ul>
          </nav>
      <h1>Food Truck Tracker</h1>
      
          <Route exact path="/SignUp">
            <SignUpForm />
          </Route>

          <Route exact path="/LogIn">
            <LogIn />
          </Route>
        
    </div>
  );
};
export default App;