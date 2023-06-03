import React from 'react';
import axios from "axios";

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        agreedClicked: false
    };

    onChange = event => {
        const { name, value } = event.target;
        //const value = event.target.value;
        //const name = event.target.name;
        
        this.setState({
            [name]: value
        });
    };

    onChangeAgree = event => {
        const { name, checked } = event.target;        
        this.setState({
            [name]: checked
        });
    };

    onClickSignup = event => {
        event.preventDefault();

        const { username, displayName, password } = this.state;

        const body = {
            username,
            displayName,
            password
        };

        axios.post("http://localhost:8080/api/1.0/users", body);
    };

    render() {
        return(
            <form>
                <h1>Sign Up</h1>
                <div>
                    <label>Username</label>
                    <input name='username' onChange={this.onChange} />
                </div>
                <div>
                    <label>Display Name</label>
                    <input name='displayName' onChange={this.onChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input name='password' type="password" onChange={this.onChange} />
                </div>
                <div>
                    <label>Password Repeat</label>
                    <input name='passwordRepeat' type="password" onChange={this.onChange} />
                </div>
                <input name='agreedClicked' type="checkbox" onChange={this.onChangeAgree} /> Agreed
                <button onClick={this.onClickSignup} disabled={!this.state.agreedClicked}>Sign Up</button>
            </form>
        );
    }
}

export default UserSignupPage;