import React from 'react';
import {Card,Input,Button} from 'semantic-ui-react'

import '../styles/signup.css'

class SignUp extends React.Component {
    state = {
        name:'',
        email:'',
        password:''
    }
    handleName = e => {
        this.setState({name:e.target.value})
    }
    handleEmail = e => {
        this.setState({
            email:e.target.value
        })
    }
    handlePassword = e => {
        this.setState({password:e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log('submitted')
    }
    render() {
        return(
            <div className='flex-container'>
                <div className='form-container'>
                    <Card fluid>
                        <div className="form">
                            <h1 className='form-header'>Sign Up</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-input'>
                                    <Input 
                                        fluid
                                        type='text'
                                        className='inp'
                                        name='name'
                                        required={true}
                                        label='Name'
                                        placeholder='Full Name'
                                        value={this.state.name}
                                        onChange={this.handleName}
                                    />
                                </div>
                                <div className="form-input">
                                    <Input 
                                        fluid
                                        type='email'
                                        className='inp'
                                        name='email'
                                        required={true}
                                        label='Email'
                                        placeholder='Email'
                                        value={this.state.email}
                                        onChange={this.handleEmail}
                                        />
                                </div>
                                <div className="form-input">
                                    <Input 
                                    fluid
                                    type='password'
                                    className='inp'
                                    name='password'
                                    required={true}
                                    label='password'
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.handlePassword}
                                    />
                                </div>
                                <div className="form-input">
                                    <Button positive fluid>Sign Up</Button>
                                </div>
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
export default SignUp;