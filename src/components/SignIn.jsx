import React from 'react';
import {Card,Input,Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addUser} from '../actions/auth'

import '../styles/signup.css'

class SignUp extends React.Component {
    state = {
        email:'',
        password:''
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
            const res = await fetch('/users/login',{method:'POST',body:JSON.stringify(this.state),headers:{ 'Content-Type':'application/json'}});
            if(!res.ok)
                console.log(res)
            const user = await res.json();
            this.props.dispatch(addUser(user))
            window.localStorage.setItem('token',user.token)
        }catch(err) {
            console.log('test',err);
        }
    }
    componentDidMount() {
    
    }
    render() {
        return(
            <div className='flex-container'>
                <div className='form-container'>
                    <Card fluid>
                        <div className="form">
                            <h1 className='form-header'>Sign In</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-input'>
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
                                    <p>To sign up click <Link to='/signup'>Here</Link></p>                                
                                </div>
                                <div className="form-input">
                                    <Button positive fluid size='big'>Sign In</Button>
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