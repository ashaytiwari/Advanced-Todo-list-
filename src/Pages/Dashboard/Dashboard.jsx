import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Grid,
    CssBaseline,
    Divider,
    Drawer,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Toolbar,
    Typography,
    Avatar,
    Paper
} from '@material-ui/core'
import styles from './styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FaTimes, FaStream, FaSignOutAlt } from "react-icons/fa";
import { Redirect, useHistory } from 'react-router-dom';
import ashay from './assets/ashay.jpeg';
import harshal from './assets/harshal.jpg';
import vivek from './assets/vivek.jpg';
import yash from './assets/yash.jpg';
import { BsHouseFill, BsClockFill } from "react-icons/bs";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import Clock from 'react-live-clock';


const Dashboard = () => {
    const classes = styles();
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const user = JSON.parse(sessionStorage.getItem('UserData'));
    const recentDate = new Date();
    const [date, setDate] = useState(recentDate);
    let currentDate = '';

    // function to get current Date in dd/mm/yyyy format
    let cYear, cDate, cMonth;
    cYear = recentDate.getFullYear();
    cMonth = (recentDate.getMonth() + 1);
    cDate = recentDate.getDate();
    if(cMonth < 10){
      cMonth = '0' + cMonth;
    }
    if(cDate < 10){
      cDate = '0' + cDate;
    }
    currentDate = cDate + '/' + cMonth + '/' + cYear;
    console.log(currentDate);

    // Calendar onChange handler
    // calendarHandler = (date) => {
    //     setDate(date);
    // }
    


    // setInterval for clock 
    useEffect(() => {
      var timerID = setInterval( () => tick(), 1000 );
      return function cleanup() {
          clearInterval(timerID);
        };
     });

     function tick() {
      setDate(new Date());
     }

    // Drawer handler:  open for mobile screen 
    const handleDrawerToggle = () => {
        setIsOpen(!isOpen);
    }

    // Logout handler: clear the session storage
    const logoutHandler = () => {
      if(window.confirm('Do you really want to logout')) {
        sessionStorage.clear();
        history.push('/');
      }
    }

    // Avatar image handler: username decides the avatar image
    let url;
    if(user.name === 'Ashay'){
      url = ashay;
    }
    else if(user.name === 'Harshal'){
      url = harshal;
    }
    else if(user.name === 'Vivek'){
      url = vivek;
    }
    else {
      url = yash;
    }

    // Drawer container starts
    const drawer = (
        <div>
            <Typography className={classes.title}>DevBand</Typography>
            <Typography className={classes.greetToUser}>Welcome {user.name}!</Typography>
            {/* Profile section also shows the latest task */}
            <div className={classes.profileTab}>
              <Avatar alt={user.name} src={url} className={classes.avatar}/>
              
                <Typography className={classes.profileText}>
                  Meeting with John <br/>
                  Family Friend
                </Typography>
              
              <BsHouseFill className={classes.profileIcon}/>
             </div>

             <Paper className={classes.timeAndDate} elevation={10}>
               <Grid container>
                 <Grid item xs={5} sm={5} md={5} xl={5} lg={5} className={classes.time}>
                    <BsClockFill className={classes.clockIcon}/>
                    <Typography className={classes.timeString}>{date.toLocaleTimeString()}</Typography>
                    <Typography className={classes.timeString}>{currentDate}</Typography>
                 </Grid>
                 <Grid item xs={7} sm={7} md={7} xl={7} lg={7} className={classes.date}>
                    <Typography className={classes.taskTitle}>Task Update</Typography>
                    <Typography className={classes.taskText}>5 Task Remains, 3 Task Completed</Typography>
                 </Grid>
               </Grid>
             </Paper>

             <Calendar value={date} className={classes.calendar} />

        </div>
    );
    // Drawer container closes
    
    // Anauthorized user can't directly access the Dasboard without login
    if(!user) return <Redirect to='/' />

    return (
        <div className={classes.root}>
      <CssBaseline />
      <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <FaStream />
        </IconButton>
      
      {/* Drawer starts */}
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={isOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <FaTimes />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>  
        </Hidden>
      </nav>
      {/* Drawer Closes */}

      {/* Main content starts */}
      <div className={classes.content}>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        edge="start"
        onClick={logoutHandler}
        className={classes.logoutButton}>
          <FaSignOutAlt />
      </IconButton>
      </div>
      {/* Main content closes */}

    </div>
    )
}


export default Dashboard
