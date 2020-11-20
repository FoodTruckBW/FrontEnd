
import * as yup from 'yup'

const formSchema2 = yup.object().shape({
    username : yup.string().required("Username is required"),
    password : yup.string().required("Password is required"),
    email : yup.string().required("E-mail is required"),
    usertype : yup.string().required("You must pick Operator or Diner") 
    
});

export default formSchema2;

///will not disable button if whats its looking for is never met.