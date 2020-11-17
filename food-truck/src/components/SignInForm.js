import React, {useState,useEffect} from 'react';
import schema from '../validation/formSchema'
import SignIn from './SignIn'
import * as yup from 'yup'

const initialValues= { 
    username: '',
    pass: '', 
}

let ordered = false
const initialDisabled = true

const SignInForm = () => {
    const [formValues,setFormValues]=useState(initialValues)
    const [signin, setsignin]=useState()
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
          const newsignin= {
            username: formValues.username.trim(),
            pass: formValues.pass.trim(),
            usertype:formValues.usertype.trim()
          }
          setsignin(newsignin)
          ordered=true
      }

      if (ordered) {
        return <SignIn signin={signin} />
    }
    else {
    
     return (
        <div>
            <h2>Log In</h2>

            <form className='form-container' onSubmit={onSubmit}>
              
            
            <label id='username'>
                    <h3>Username</h3> 
                    <input name='username'
                    type="text" 
                    placeholder="Enter username here"
                    value={formValues.username}
                    onChange={onChange}
                    />
                </label>
                <label id='pass'>
                    <h3>Password</h3> 
                    <input name='pass'
                    type="password" 
                    placeholder="**********"
                    value={formValues.pass}
                    onChange={onChange}
                    />
                </label>
                
                <button id='submit'disabled={disabled}>Sign In!</button> 
                

            </form>
        </div>
     )
}

}
export default SignInForm;