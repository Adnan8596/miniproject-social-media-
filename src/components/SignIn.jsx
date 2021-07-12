import React from 'react';
import {Card,Input,Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addUser} from '../actions/auth'
import {api} from '../constant'

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
            const res = await fetch(`${api}/users/login`,{method:'POST',body:JSON.stringify(this.state),headers:{ 'Content-Type':'application/json'}});
            if(!res.ok)
                console.log(res)
            const user = await res.json();
            this.props.dispatch(addUser(user))
            window.localStorage.setItem('token',user.token)
            this.props.history.push('/posts')
        }catch(err) {
            console.log('test',err);
        }
    }
    componentDidMount() {
    
    }
    render() {
        return(
            <div className='Uflex-container'>
                <div className='Uform-container'>
                    <Card fluid>
                        <div className="Uform">
                            <h1 className='Uform-header'>Sign In</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className='Uform-input'>
                                </div>
                                <div className="Uform-input">
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
                                <div className="Uform-input">
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
                                <div className="Uform-input">
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