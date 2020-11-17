import React, {useState,useEffect} from 'react';
import schema from '../validation/formSchema'
import SignUp from './SignUp'
import * as yup from 'yup'

const initialValues= { 
    username: '',
    pass: '', 
    email: '',
    usertype: ''
}

let ordered = false
const initialDisabled = true

const SignUpForm = () => {
    const [formValues,setFormValues]=useState(initialValues)
    const [signup, setsignup]=useState()
    const [disabled, setDisabled] =useState(initialDisabled)

    useEffect(() => {
        schema.isValid(formValues)
        .then(valid => { 
          setDisabled(!valid)
        })
      }, [formValues])


    const onChange = (event) => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormValues({
            ...formValues,
            [name]: valueToUse
          })
      }

      const onSubmit = (event) => { 
          event.preventDefault()
          const newsignup= {
            username: formValues.username.trim(),
            pass: formValues.pass.trim(),
            email: formValues.email.trim(),
            usertype:formValues.usertype.trim(),
       }
          setsignup(newsignup)
          ordered=true
      }

      if (ordered) {
        return <SignUp signup={signup} />
    }
    else {

      return(   
        <div >
            <h2>Register</h2>

                <form className='form-container' onSubmit={onSubmit}>
                <div className='choices'>
                    <div>
                        <input type='radio' 
                        name='usertype'
                        value='Operator'
                        checked={formValues.usertype === 'Operator'}
                        onChange={onChange}
                        /> Operator
                    </div>
                    <div>
                        <input type='radio'
                        name='usertype'
                        value="Diner"
                        checked={formValues.usertype === 'Diner'}
                        onChange={onChange} 
                        /> Diner
                    </div>
                </div>

            <label id='username'>
                    <h3>Username</h3> 
                    <input name='username'
                    minLength = "6"
                    type="text" 
                    placeholder="Enter username here"
                    value={formValues.username}
                    onChange={onChange}
                    />
                </label>
                <label id='pass'>
                    <h3>Password</h3> 
                    <input name='pass'
                    minLength = "6"
                    type="password" 
                    placeholder="**********"
                    value={formValues.pass}
                    onChange={onChange}
                    />
                </label>
                <label id='email'>
                    <h3>E-Mail</h3> 
                    <input name='email'
                    type="text" 
                    placeholder="Enter E-Mail here"
                    value={formValues.email}
                    onChange={onChange}
                    />
                </label>

                <div className='controls'>
                <button id='submit'disabled={disabled}>Sign Up!</button> 
                </div>

            </form>
        </div>
      )
    }
}


export default SignUpForm;