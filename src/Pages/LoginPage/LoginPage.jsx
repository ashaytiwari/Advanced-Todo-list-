import React, { useState } from 'react';
import {
    Box,
    Grid,
    Paper,
    Typography,
    TextField,
    FormControl,
    Button,
    FormControlLabel, 
    Checkbox, 
    CircularProgress
} from '@material-ui/core';
import styles from './styles';
import welcome from './assets/welcome.png';
import tree from './assets/tree.png'
import { useHistory, Redirect } from 'react-router-dom';

const LoginPage = () => {
    const classes = styles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const user = JSON.parse(sessionStorage.getItem('UserData'));
    const history = useHistory();

    // userData stored in array of objects
    const userData = [
        {
            username: 'Ashay',
            password: 'ashay'
        },
        {
            username: 'Vivek',
            password: 'vivek'
        },
        {
            username: 'Harshal',
            password: 'harshal'
        },
        {
            username: 'Shruti',
            password: 'shruti'
        },
    ]

    // submitHandler for login form
    const submitHandler = event => {
        let count = 0;
        let index = 0;
        event.preventDefault();
        for(let i = 0; i < userData.length; i++ ){
            if(username === userData[i].username && password === userData[i].password){
              count++ ;
              index = i;
              setIsLoading(true);
              break;
            }
            else{
               count = 0;
            }
        }
        
        if(count > 0){
            let loginUserData = {name: userData[index].username, password: userData[index].password};
            sessionStorage.setItem('UserData', JSON.stringify(loginUserData));
            setTimeout(() => {
                history.push('/dashboard');
                setIsLoading(false);
            }, 5000);
            
            
        }
        else{
            alert('Invalid user');
        }
    }

    // if user already login; directly route to dashboard
    // if(user) return <Redirect to='/dashboard ' />

    return (
        <Box className={classes.loginPage}>
            <Grid container>
                <Grid item md={1} lg={1} xl={1}></Grid>
                <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                    <Paper className={classes.loginCard} elevation={10}>
                        <Grid container>
                            <Grid item md={7} lg={8} xl={8} className={classes.welcomeSection}>
                                <Typography className={classes.greet}>Welcome to DevBand</Typography>
                                <Typography className={classes.title}>Task Scheduler</Typography>
                                <img src={welcome} width='85%' />
                            </Grid>
                            <Grid item xs={12} sm={12} md={5} lg={4} xl={4} className={classes.loginSection}>
                                <img src={tree} width='50%' className={classes.tree} />
                                {/* Login form starts */}
                                <form onSubmit={submitHandler}>
                                    <Typography className={classes.loginTitle}>Login</Typography>

                                    <input
                                        className={classes.input}
                                        type='text'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Username"
                                        required />

                                    <input
                                        className={classes.input}
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        required />

                                       <input 
                                       type="checkbox" 
                                       id="remeberMe" 
                                       value={isRemember}
                                       onChange={(e) => setIsRemember(!isRemember)}
                                       className={classes.checkbox}
                                       required/> &nbsp;
                                       <label htmlFor="rememberMe" className={classes.checkLabel}>Remember Me</label>

                                    {
                                        isLoading ? (
                                            <Button variant="contained" disabled className={classes.loginButton}>Please Wait</Button>
                                        ) : (
                                            <Button variant="contained" color='primary' className={classes.loginButton} type='submit'>Login</Button>
                                        )
                                    }
                                </form>
                                {/* Login form closes */}
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item md={1} lg={1} xl={1}></Grid>
            </Grid>
        </Box>
    )
}

export default LoginPage
