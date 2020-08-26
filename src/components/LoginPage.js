import React, { Component } from 'react'
import welcome from './images/welcome.png'
import tree from './images/tree.png'

class LoginPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userInfo: [
                { userName: 'Ashay', password: 'ashay' },
                { userName: 'Ram', password: 'ram' },
                { userName: 'Ravi', password: 'ravi' }, 
                { userName: 'Vivek', password: 'vivek' }, 
                { userName: 'Shruti', password: 'shruti' }
            ],
            userName: '',
            password: '',
            isRemember: false
        }
    }

    // Name Handler for userName
    nameHandler = event => {
        this.setState({
            userName: event.target.value
        })
    }

     // Password Handler for password
     passwordHandler = event => {
        this.setState({
            password: event.target.value
        })
    }


    // Remember handler for checkbox
    rememberHandler = event => {
        this.setState({
            isRemember: !this.state.isRemember
        });
    }

    //Submit Handler for form submition
    submitHandler = event => {
        let count = 0;
        event.preventDefault();
        for(let i = 0; i < this.state.userInfo.length; i++){
            if(this.state.userName === this.state.userInfo[i].userName && this.state.password === this.state.userInfo[i].password){
                count++;
            }
            else{
                count = 0;
            }
        }
        if(count !== 0){
            alert("Successful");
            this.setState({
                userName: "",
                password: "",
                isRemember: false
            })
        }
        else{
            alert("Invalid user");
            this.setState({
                userName: "",
                password: "",
                isRemember: false
            })
        }
    }

    render() {
        return (
            <div className="login-page">
                <div className="row">

                    <div className="col-md-1"></div>

                    {/* Login card starts */}
                    <div className="col-md-10">
                        <div className="login-card">
                            <div className="col-md-8 welcome">
                                <h1 className="greet">Welcome to</h1>
                                <h1 className="title">Dev Band</h1><br />
                                <p>Advanced Todo List based on ReactJs with User Authentification</p>
                                <p>Want to learn ReactJs.....</p><br />
                                <a href="https://reactjs.org/docs/getting-started.html">
                                    <button className="tutorial">Learn React</button>
                                </a>
                                {/* <img src={welcome} /> */}
                            </div>

                            <div className="col-md-4 card text-center">
                                <img src={tree} />
                                <h3>Login</h3><br />
                                <form onSubmit={this.submitHandler}>
                                    <input type="text"
                                        className="input"
                                        name="userName"
                                        value={this.state.userName}
                                        onChange={this.nameHandler}
                                        placeholder="USERNAME"
                                        required />

                                    <input type="password"
                                        className="input"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.passwordHandler}
                                        placeholder="PASSWORD"
                                        required />

                                    <input type="checkbox"
                                        name="isRemember"
                                        checked={this.state.isRemember}
                                        onChange={this.rememberHandler}
                                        required /> Remember me

                                    <button type="submit" className="login-btn">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-1"></div>

                </div>
            </div>
        )
    }
}

export default LoginPage
