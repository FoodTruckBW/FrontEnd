import React, { useState, useEffect} from 'react';
import * as yup from 'yup'
import  formSchema  from '../validation/formSchema'

import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'


export default function Login () {

  const [ login, setLogin ] = useState({
      username : "",
      password : "",
  });

  const [ errors , setErrors ] = useState({
      username : "",
      password : "",
  });

  const validateChange = e => {
      yup.reach( formSchema , e.target.name )
      .validate( e.target.value )
      .then(valid => {
          setErrors({
              ...errors, [e.target.name] : ""
          });
      })
      .catch( err => {
          setErrors({
              ...errors, [e.target.name] : err.errors[0]
          });
      });
  };

  const history = useHistory();

  const postUser = (thisUser) => {
    axiosWithAuth()
    .post('/login', thisUser)
    .then((res) => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        history.push('/trucks')
    })
    .catch(error => {
        alert('Incorrect Username or Password!')
        console.log(error)
    })
}

  const formSubmit = e => {
    e.preventDefault();
  const thisUser ={
    username: login.username.trim(),
    password: login.password,
  };
  postUser(thisUser)
  };

  const inputChange = e => {
      e.persist();
      const newForm = {
          ...login, [e.target.name] : e.target.value
      };
      validateChange(e);
      setLogin(newForm);
      console.log(login)
  }

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
      formSchema.isValid(login).then(valid => {
          setButtonDisabled(!valid)
      })
  }, [login]);
  console.log(buttonDisabled)

  return (
      <form onSubmit={formSubmit}>
          <div id="parent2">
          <label htmlFor="username">
              Username
              <input
              id="username"
              type="text"
              name="username"
              value={login.username}
              onChange={inputChange}
              />
              {errors.username.length > 0 ? ( <p className="errors">{errors.username}</p> ) : null}
          </label>
          <label htmlFor="password">
              Password
              <input 
              id="password"
              type="password"
              name="password"
              value={login.password}
              onChange={inputChange}
              />
              {errors.password.length > 0 ? ( <p className="errors">{errors.password}</p> ) : null}
              </label>
              <button disabled={buttonDisabled}>Login</button>
              </div>
      </form>
  );
};