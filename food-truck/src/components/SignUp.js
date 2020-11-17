import React from 'react'; 


const SignUp = (props) => {
    const {signup}= props
    return (<div>
        <h2>Register Details</h2>
        
        <ul>
            <li>Name:{signup.username}</li>
            <li>Password:{signup.pass}</li>
            <li>E-Mail:{signup.email}</li>
            <li>User type:{signup.usertype}</li>
        </ul>
     

    </div>  );
}
 
export default SignUp;