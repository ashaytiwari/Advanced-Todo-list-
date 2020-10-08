import { makeStyles, useTheme } from '@material-ui/core/styles';



const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      drawer: {
        backgroundColor: '#fffff0',
        [theme.breakpoints.up('sm')]: {
          width: '450px',
          flexShrink: 0,
        },
      },
      
      menuButton: {
        marginRight: theme.spacing(2),
        zIndex: theme.zIndex.drawer + 1,
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      drawerPaper: {
        backgroundColor: '#fffff0',
        width: '450px',
        padding: '25px'
      },
      content: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
        height: '100%',
        padding: theme.spacing(3),
      },
      closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
      },
      title: {
        fontSize: '30px',
        letterSpacing: '3px',
        fontFamily: 'SansitaSwashed',
        color: '#004e92',
        marginBottom: '15px',
      },
      greetToUser: {
        fontSize: '22px',
        fontFamily: 'Ubuntu',
        marginBottom: '8px'
      },
      avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
      profileTab: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: '25px'
      },
      profileText: {
        // fontFamily: 'Ubuntu',
        fontSize: '18px'
      },
      profileIcon: {
        fontSize: '45px',
        color: '#004e92'
      },
      timeAndDate: {
        borderRadius: '0'
      },
      time: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
      },
      clockIcon: {
        fontSize: '30px',
        color: '#004e92',
        marginBottom: '20px'
      },
      timeString: {
        fontSize: '16px',
        fontFamily: 'Ubuntu'
      },
      date: {
        backgroundColor: '#004e92',
        padding: '10px'

      },
      taskTitle: {
        color: 'white',
        fontSize: '20px',
        marginBottom: '10px',
        fontFamily: 'Ubuntu'
      },
      taskText: {
        color: 'white',
        fontSize: '16px',
        fontFamily: 'Ubuntu'
      },
      calendar: {
        width: '100%',
        marginTop: '25px',
        fontSize: '15px',
        border: '0',
        fontFamily: 'Ubuntu'
      },
}))

export default styles;
