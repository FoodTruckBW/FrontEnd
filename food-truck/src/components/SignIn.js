import React from 'react'; 


const SignIn = (props) => {
    const {signin}= props
    return (<div>
        <h2>Login Details</h2>
        <ul>
            <li>Name:{signin.username}</li>
            <li>Password:{signin.pass}</li>
            <li>E-Mail:{signin.email}</li>
            <li>User type:{signin.usertype}</li>
        </ul>
     

    </div>  );
}
 
export default SignIn;