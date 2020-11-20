import React, {useState,useEffect} from 'react';
import formSchema2 from '../validation/formSchema2'
import * as yup from 'yup'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';

const WrapperDiv = styled.div`
color:red;
`;
export default function Signup () {

    const [ signup, setSignup ] = useState({
        username : "",
        password : "",
        email:"",
        usertype:""
    });
  
    const [ errors , setErrors ] = useState({
        username : "",
        password : "",
        email:"",
        usertype:""
    });

    const validateChange = e => {
        yup.reach( formSchema2 , e.target.name )
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
        .post('/signup', thisUser)
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            history.push('/trucks')
        })
        .catch(error => {
            alert('Incorrect registration info, please re-enter!')
            console.log(error)
        })
    }

    const formSubmit = e => {
        e.preventDefault();
      const thisUser ={
        username: signup.username.trim(),
        password: signup.password,
        email: signup.email.trim(),
        usertype: signup.usertype.trim()
      };

      postUser(thisUser)
      };
    
      const inputChange = e => {
          e.persist();
          const newForm = {
              ...signup, [e.target.name] : e.target.value
          };
          validateChange(e);
          setSignup(newForm);
          console.log(signup)
      }
    
      const [buttonDisabled, setButtonDisabled] = useState(true);
    
      useEffect(() => {
          formSchema2.isValid(signup).then(valid => {
              setButtonDisabled(!valid)
          })
      }, [signup]);
      console.log(buttonDisabled)

      return (
        <form className='form-container' onSubmit={formSubmit}>
            <div className='choices'>
            
            <label htmlFor="usertype">
                <input 
                id = "usertype"
                type = "radio"
                name='usertype'
                value='Operator'
                checked={signup.usertype === 'Operator'}
                onChange={inputChange}
                /> Operator
            
                <input
                id = "usertype" 
                type='radio'
                name='usertype'
                value="Diner"
                checked={signup.usertype === 'Diner'}
                 onChange={inputChange} 
                /> Diner
            </label>
            </div>
            
            <label htmlFor="username">
                
                <input
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                value={signup.username}
                onChange={inputChange}
                />
                {errors.username.length > 0 ? ( <p className="errors">{errors.username}</p> ) : null}
            </label>
            
            <label htmlFor="password">
                <input 
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={signup.password}
                onChange={inputChange}
                />
                {errors.password.length > 0 ? ( <p className="errors">{errors.password}</p> ) : null}
                </label>

                <label htmlFor='email'>
                    <input
                    id="email" 
                    name='email'
                    type="email" 
                    placeholder="Email"
                    value={signup.email}
                    onChange={inputChange}
                    />
                    {errors.email.length > 0 ? ( <p className="errors">{errors.email}</p> ) : null}
                </label>
                <WrapperDiv>
                <div className='controls'>
                <button disabled={buttonDisabled}>Sign Up</button>
                </div>
                </WrapperDiv>
        </form>
    );
  };

