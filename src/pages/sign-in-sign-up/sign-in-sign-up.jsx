import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import './sign-in-sign-up.scss';
import SignUp from '../../components/sign-up/sign-up';


const SignInSignUp = () => ( 
    <div className='sign-in-sign-up'> 
    <SignIn />
    <SignUp/>
    </div>
)

export default SignInSignUp;