import React, { Component } from 'react';

const API = 'https://dog.ceo/api/breeds/image/random';
export default class User extends Component {

    state = {
        doggo: null
    }

    componentWillMount() {
        this.fetchDoggo();
    }

    fetchDoggo = async () => {
        const res = await fetch(API);
        const { message } = await res.json();
        this.setState({ doggo: message });
    }

    render() {
        const name = this.props.match.params.name;
        return (
            <div>
                <h1>Welcome { name }</h1>
                <img width='400' src={ this.state.doggo }/>
                <button onClick={ this.fetchDoggo }>Give me doggo</button>
            </div>
        );
    }
}