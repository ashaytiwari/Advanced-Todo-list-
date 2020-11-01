import React, { useState, useEffect, useContext } from 'react';
import {
  AppBar,
  Grid,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
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
import { BsHouseFill, BsClockFill, BsTrash, BsBoxArrowInRight } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { DateContext } from '../../App'
// import Clock from 'react-live-clock';

const Task = ({ task, index, completeTask, deleteTask }) => {
  const classes = styles();
  const todaysDate = useContext(DateContext);
  const time = new Date();

  return (
    <div className={classes.taskCard} elevation={5} onClick={() => completeTask(index)}>
      <div>
      <Typography className={classes.taskCardTitle} 
       style={{ textDecoration: task.completed ? 'line-through' : '' }}>{task.title}</Typography>
        {
          task.date === todaysDate ?  
        <Typography className={classes.taskCardDate}>Today {task.time}</Typography>
            :
          <Typography className={classes.taskCardDate}>{task.date} {task.time}</Typography>
        }
        </div>
      <IconButton
        aria-label="deleteTodo"
        className={classes.deleteBtn}
        onClick={(e) => { e.stopPropagation();
          deleteTask(index)}}
      >
        <BsTrash />
      </IconButton>
    </div>
  )
}

const Dashboard = () => {
  const classes = styles();
  const theme = useTheme();
  const cDate = new Date();
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem('UserData'));
  const todaysDate = useContext(DateContext);
  const [newTodo, setNewTodo] = useState('');
  // Todo container starts
  const [taskContent, setTaskContent] = useState([
    {
      title: 'Chanting 16 rounds',
      completed: true,
      date: '15/10/2020',
      time: '5:06 PM'
    },
    {
      title: 'Meeting with John',
      completed: false,
      date: '15/10/2020',
      time: '9:06 PM'
    },
    {
      title: 'Deploying App',
      completed: true,
      date: '16/10/2020',
      time: '2:30 PM'
    },
    {
      title: 'Clg Assignment',
      completed: false,
      date: '17/10/2020',
      time: '3:53 PM'
    },
  ]);
  // Todo container closes


  /** 
 * code to get current time updating every second
   */
  const [date, setDate] = useState(cDate);
  // setInterval for clock 
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  // Ticking function for clock
  function tick() {
    setDate(new Date());
  }


  // Drawer handler:  open for mobile screen 
  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  }

  // Logout handler: clear the session storage
  const logoutHandler = () => {
    if (window.confirm('Do you really want to logout')) {
      sessionStorage.clear();
      history.push('/');
    }
  }

 // Anauthorized user can't directly access the Dasboard without login
 if (!user) return <Redirect to='/' />

  // Avatar image handler: username decides the avatar image
  let url;
  if (user.name === 'Ashay') {
    url = ashay;
  }
  else if (user.name === 'Harshal') {
    url = harshal;
  }
  else if (user.name === 'Vivek') {
    url = vivek;
  }
  else {
    url = yash;
  }

  

  // Drawer container starts
  const DrawerContent = () => {
    return (
      <div>
        <div className={classes.settings}>
          <Typography className={classes.title}>DevBand</Typography>
          <IconButton
            aria-label="deleteTodo"
            className={classes.logoutBtn}
            onClick={(e) => logoutHandler()}
          >
            <BsBoxArrowInRight />
          </IconButton>
        </div>

        <Typography className={classes.greetToUser}>Welcome {user.name}!</Typography>
        
        {/* Profile section also shows the latest task */}
        <div className={classes.profileTab}>
          <Avatar alt={user.name} src={url} className={classes.avatar} />

          <Typography className={classes.profileText}>
            Meeting with John <br />
            Family Friend
                </Typography>

          <BsHouseFill className={classes.profileIcon} />
        </div>

        <Paper className={classes.timeAndDate} elevation={10}>
          <Grid container>
            <Grid item xs={5} sm={5} md={5} xl={5} lg={5} className={classes.time}>
              <BsClockFill className={classes.clockIcon} />
              <Typography className={classes.timeString}>{date.toLocaleTimeString()}</Typography>
              <Typography className={classes.timeString}>{todaysDate}</Typography>
            </Grid>
            <Grid item xs={7} sm={7} md={7} xl={7} lg={7} className={classes.date}>
              <Typography className={classes.taskTitle}>Task Update</Typography>
              <Typography className={classes.taskText}>5 Task Remains, 3 Task Completed</Typography>
            </Grid>
          </Grid>
        </Paper>

        <Calendar value={cDate} className={classes.calendar} />

      </div>
    )
  }
  // Drawer container closes


  // function to add todo in taskContent
   const addTask = title => {
    const newTasks = [...taskContent, {
      title, 
      completed: false, 
      time: cDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
      date: todaysDate
    }];
    setTaskContent(newTasks);
  };

  // function to complete the task in todo
  const completeTask = index => {
    const newTasks = [...taskContent];
    newTasks[index].completed = !newTasks[index].completed;
    setTaskContent(newTasks);
  }

  // function to delete the task in todo
  const deleteTask = index => {
    if (window.confirm('Do you completed that task and want to delete it ?')) {
      const newTasks = [...taskContent];
      console.log(index);
      newTasks.splice(index, 1);
      setTaskContent(newTasks);
    }
  }

   //Todo submit handler: handle the todo submission
   const todoSubmitHandler = (e) => {
    e.preventDefault();
    if (!newTodo) return;

    addTask(newTodo);
    setNewTodo('');
    alert('Task successfully added');
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

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
            <DrawerContent />
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
            <DrawerContent />
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
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <FaStream />
      </IconButton>
        <form onSubmit={todoSubmitHandler}>
          <FormControl fullWidth className={classes.todoForm}>
            <InputLabel htmlFor="inputTodo" className={classes.input}>Add Task</InputLabel>
            <Input
              id="inputTodo"
              type='text'
              className={classes.input}
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="submitTodo"
                    className={classes.iconBtn}
                    type='submit'
                  >
                    <FaTelegramPlane />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </form>

        <div className={classes.tasks}>
        <Grid container>
          <Grid item md={4} xl={6} lg={6}></Grid>
          <Grid item xl={12} sm={12} md={8} xl={6} lg={6}>
          {
            taskContent.map((task, index) => (
                // <Grid item xs={12} sm={12} md={6} xl={6} lg={6} className={classes.todoCard} key={index}>
                  <Task  key={index}
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    deleteTask={deleteTask} />
                // </Grid> 
            ))
          }
          </Grid>
          {/* <Grid item md={2} xl={3} lg={3}></Grid> */}
          </Grid>

        </div>

      </div>
      {/* Main content closes */}

    </div>
  )
}


export default Dashboard
