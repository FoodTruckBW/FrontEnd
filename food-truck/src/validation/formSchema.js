import * as yup from 'yup'

export default yup.object().shape({ 

    username: yup.string().required("You must enter a name").min(6, "Username must be at least 6 characters long"), 
    pass: yup.string().required("You must enter a password").min(6, "Password must be at least 6 characters long"), 
    email: yup.string().required("You must enter an email"), 
    usertype: yup.boolean()
    
})