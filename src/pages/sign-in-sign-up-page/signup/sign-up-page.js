import React from 'react';

import FormInput from '../../../component/formInput/formInput';

import './sign-up-page.style.scss';

import Button from '../../../component/UI/Button/Button';

import { signInWithGoogle } from '../../../component/firebase/firebase';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            email: '',
            phoneNumber: ''
        }
    
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: ' ', password: ' ' });
}

    onChangehandler = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-up-page'>
                <h1 className='page-title'>SIGN UP</h1>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='username' 
                        title='Username'
                        value={this.state.username} 
                        change={this.onChangehandler}
                        label='username'
                        type='text'   />
                    <FormInput 
                        name='password' 
                        title='Password'
                        value={this.state.password}
                        change={this.onChangehandler}
                        label='password' 
                        type='password'   />
                    <FormInput 
                        name='email' 
                        title='Email'
                        value={this.state.email}
                        change={this.onChangehandler}
                        label='email' 
                        type='email'   />
                    <FormInput 
                        name='phoneNumber' 
                        title='Tel'
                        value={this.state.phoneNumber}
                        change={this.onChangehandler} 
                        label='phonenumber'
                        type='tel'   />

                    <Button kind='default' > Submit </Button>
                    <span
                        style={{
                            position: 'relative',
                            left: '11%'
                        }}
                    >OR</span>
                    <Button kind='default' onClick={signInWithGoogle} > Sign In With Google </Button>
                </form>
            </div>
        );
    }

}
    


export default SignUp;