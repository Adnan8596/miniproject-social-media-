import React from 'react';
import {Card,Input,Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {addUser} from '../actions/auth'

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
    handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await fetch('/users',{method:'POST',body:JSON.stringify(this.state),headers:{ 'Content-Type':'application/json'}});
            if(!res.ok)
                console.log(res)
            const user = await res.json();
            this.props.dispatch(addUser(user))
        }catch(err) {
            console.log('test',err);
        }
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
                                        size='big'
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
                                        size='big'
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
                                    size='big'
                                    />
                                </div>
                                <div className="form-input">
                                    <Button positive fluid size='big'>Sign Up</Button>
                                </div>
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
export default connect()(SignUp);