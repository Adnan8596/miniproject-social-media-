import React from 'react';
import {Card,Input,Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addUser} from '../actions/auth'
import {api} from '../constant'

import '../styles/signup.css'

class SignUp extends React.Component {
    state = {
        name:'',
        email:'',
        password:'',
        file:null
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
    handleAvatar = e => {
        this.setState({
            file:e.target.files[0]
        });
    }
    handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await fetch(`${api}/users`,{method:'POST',body:JSON.stringify(this.state),headers:{ 'Content-Type':'application/json'}});
            console.log(res)
            if(!res.ok)
                console.log(res)
            const user = await res.json();
            const formData = new FormData();
            formData.append('avatar', this.state.file);
            const resAvatar = await fetch(`${api}/users/avatar`,{method:'POST',body:formData,headers: new Headers({
                'Authorization':'Bearer ' + user.token
            })})
            console.log(resAvatar)
            this.props.dispatch(addUser(user))
            this.props.history.push('/posts')
            window.localStorage.setItem('token',user.token)
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
                                    <Input 
                                    type='file' 
                                    accept='image/*'
                                    required={true}  
                                    onChange={this.handleAvatar}
                                    />
                                    <p>To sign in click <Link to='/signin'>Here</Link></p>
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