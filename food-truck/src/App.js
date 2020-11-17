import React from "react";
import {Route, Link} from "react-router-dom";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import './App.css'

const App = () => {
  return (
    <div className='app-container'>
      <nav>
            <ul>
              <li>
              <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </ul>
          </nav>
      <h1>Food Truck Tracker</h1>
      
          <Route exact path="/SignUp">
            <SignUpForm />
          </Route>

          <Route exact path="/SignIn">
            <SignInForm />
          </Route>
        
    </div>
  );
};
export default App;