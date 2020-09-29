import React from 'react';
import { 
    Box,
    Grid, 
    Paper,
    Typography
} from '@material-ui/core';
import styles from './styles'

const LoginPage = () => {
    const classes = styles();
  
    return (
        <Box className={classes.loginPage}>
            <Grid container>
                <Grid item md={1} lg={1} xl={1}></Grid>
                <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                    <Paper className={classes.loginCard} elevation={10}>
                        <Grid container>
                            <Grid item md={7} lg={8} xl={8} className={classes.welcomeSection}>
                                <Typography className={classes.greet}>Welcome to</Typography>
                                <Typography className={classes.title}>DevBand</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={5} lg={4} xl={4}></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item md={1} lg={1} xl={1}></Grid>
            </Grid>
        </Box>
    )
}

export default LoginPage
