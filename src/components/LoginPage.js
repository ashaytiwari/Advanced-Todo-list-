import React, { Component, useState } from 'react'
import { useHistory } from 'react-router-dom';
import welcome from './images/welcome.png'
import tree from './images/tree.png';

function LoginPage() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(false);

    const history = useHistory();

    const userInfo = [
        { userName: 'Ashay', password: 'ashay' },
        { userName: 'Ram', password: 'ram' },
        { userName: 'Ravi', password: 'ravi' },
        { userName: 'Vivek', password: 'vivek' },
        { userName: 'Shruti', password: 'shruti' }
    ];

    const submitHandler = event => {
        let count = 0;
        event.preventDefault();
        for (let i = 0; i < userInfo.length; i++) {
            if (userName === userInfo[i].userName && password === userInfo[i].password) {
                count++;
                break;
            }
            else {
                count = 0;
            }
        }
        if (count > 0) {
            history.push('/todoPage');
            setUserName('');
            setPassword('');
            setIsRemember(false);
        }
        else {
            alert("Invalid user");
            setUserName('');
            setPassword('');
            setIsRemember(false);
        }
    }

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
                            <form onSubmit={submitHandler}>
                                <input type="text"
                                    className="input"
                                    name="userName"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    placeholder="USERNAME"
                                    required />

                                <input type="password"
                                    className="input"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="PASSWORD"
                                    required />

                                <input type="checkbox"
                                    name="isRemember"
                                    value={isRemember}
                                    onChange={(e) => setIsRemember(true)}
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

export default LoginPage



