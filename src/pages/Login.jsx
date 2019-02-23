import React, { Component } from 'react';

export default class Login extends Component {

    state = {
        name: '',
        password: ''
    }

    submit = el => {
        el.preventDefault();
        const { name, password } = this.state;
        
        if (!name || !password) {
            alert('No name or password');
        } else {
            console.log('SUCCESS!');
            this.props.history.push('/' + name);
        }
    }

    change = el => {
        const { name, value } = el.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form onSubmit={ this.submit }>
                <h1>Login Page</h1>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        value={ this.state.name }
                        onChange={ this.change }
                        name='name'
                        placeholder='Give me your name pls'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        value={ this.state.password }
                        onChange={ this.change }
                        name='password'
                        type='password'
                        placeholder='Give me your pw pls'
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        );
    }
}