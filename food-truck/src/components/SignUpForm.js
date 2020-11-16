import React, {useState,useEffect} from 'react';
import schema from '../validation/formSchema'
import * as yup from 'yup'

const initialValues= { 
    user: '',
    pass: '', 
    email: ''
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
            name: formValues.name.trim(),
            size: formValues.size.trim(),
            sauce: formValues.sauce.trim(),
            intructions:formValues.instructions.trim(),
            toppings: ['pepperoni', 'cheese', 'meatLovers', 'veggieLovers'].filter((topping => formValues[topping]))
          }
          setsignup(newsignup)
          ordered=true
      }

      return(   
        <div >
            <h2>Register</h2>

            <form className='form-container' onSubmit={onSubmit}>
            <label id='username'>
                    <h3>Username</h3> 
                    <input name='username'
                    value={formValues.name}
                    onChange={onChange}
                    />
                </label>
                <label id='pword'>
                    <h3>Password</h3> 
                    <input name='pword'
                    value={formValues.pword}
                    onChange={onChange}
                    />
                </label>
                <label id='email'>
                    <h3>E-Mail</h3> 
                    <input name='email'
                    value={formValues.email}
                    onChange={onChange}
                    />
                </label>

                <button id='submit'disabled={disabled}>Sign Up!</button> 
                

            </form>
        </div>
      )
}

export default SignUpForm;