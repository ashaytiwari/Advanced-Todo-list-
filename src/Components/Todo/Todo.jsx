import React, { useState, useEffect } from 'react';
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

const Task = ({ task }) => {
    const classes = styles();
    return (
        <Paper className={classes.taskCard}
            style={{ textDecoration: task.completed ? 'line-through' : '' }}>
            {task.title}
        </Paper>
    )
}

const Todo = () => {
    const classes = styles();


    // Content for task showing in dashboard
    const [taskContent, setTaskContent] = useState([
        {
            title: 'Chanting 16 rounds',
            completed: true
        },
        {
            title: 'Meeting with John',
            completed: false
        },
        {
            title: 'Meeting with Harry',
            completed: false
        },
        {
            title: 'Deploying App',
            completed: true
        },
        {
            title: 'Clg Assignmnet',
            completed: false
        },
    ]);

    return (
        <div className={classes.todoContainer}>
            <div className={classes.tasks}>
                {
                    taskContent.map((task, index) => (
                        <Task key={index}
                        task={task} />
                    ))
                }
            </div>
        </div>
    )

}

export default Todo;