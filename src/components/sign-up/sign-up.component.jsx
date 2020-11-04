import React from 'react';
import './sign-up.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { createUserProfileDocument, auth } from '../../firebase/firebase.utils';

class signUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    }
    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state; 
        
        if(password !== confirmPassword) {
            alert("passwords don't match!");
            return;
        }

        try {
            const user = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            
            await createUserProfileDocument(user, {displayName, email});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }catch (error){
            console.error(error);
        }
    };

    onChangeHandler = (event) => {
        const {value, name} = event.target;

        this.setState({ 
            [name]: value
        })
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state; 
        return(
            <div className='sign-up'>
                <h1 className='title'>Sign Up</h1>
                <h2>I do not have an account.</h2>
                <span>Sign up with your email and password.</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName'
                        title='DisplayName'
                        value={displayName}
                        handleChange={this.onChangeHandler}
                        label='DisplayName'
                        type='text'/>
                    <FormInput 
                        name='email'
                        title='Email'
                        value={email}
                        handleChange={this.onChangeHandler}
                        label='Email'
                        type='email'/>
                    <FormInput 
                        name='password'
                        title='Password'
                        value={password}
                        handleChange={this.onChangeHandler}
                        label='Password'
                        type='password'/>
                    <FormInput 
                        name='confirmPassword'
                        title='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.onChangeHandler}
                        label='confirmPassword'
                        type='password'/>

                    <div className='button-holder'>
                        <CustomButton kind='default' > Sign Up </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default signUp;

