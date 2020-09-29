import React from 'react';
import { 
    Box,
    Grid, 
    Paper
} from '@material-ui/core';
import styles from './styles'

const LoginPage = () => {
    const classes = styles();
  
    return (
        <Box className={classes.loginPage}>
            <Grid container>
                <Grid item md={1} lg={1} xl={1}></Grid>
                <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                    <Paper>hello</Paper>
                </Grid>
                <Grid item md={1} lg={1} xl={1}></Grid>
            </Grid>
        </Box>
    )
}

export default LoginPage
