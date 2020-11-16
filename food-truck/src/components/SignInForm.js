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
            name: formValues.name.trim(),
            size: formValues.size.trim(),
            sauce: formValues.sauce.trim(),
            intructions:formValues.instructions.trim(),
            toppings: ['pepperoni', 'cheese', 'meatLovers', 'veggieLovers'].filter((topping => formValues[topping]))
          }
          setsignin(newsignin)
          ordered=true
      }

     return (
        <div >
            <h2>Log In</h2>

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

                <button id='submit'disabled={disabled}>Sign In!</button> 
                

            </form>
        </div>
     )
}

 
export default SignInForm;