import { makeStyles, useTheme } from '@material-ui/core/styles';
import background from './assets/background.jpg';


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
        padding: '10px',
        backgroundImage: `url( ${background} )`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%'
        // padding: theme.spacing(3),
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
      todoForm: {
        marginBottom: '20px'
      },
      input: {
        fontSize: '20px',
        fontFamily: 'Ubuntu',
        color: '#ffffff'
      },
      iconBtn: {
        fontSize: '25px',
        color: '#ffffff'
      },
      taskCard: {
        borderRadius: '10px',
        margin: '20px 0 20px 0',
        padding: '15px',
        fontFamily: 'Ubuntu',
        cursor: 'Pointer',
        backgroundColor: '#fffff0',
        boxShadow: '0 2px 4px 0 #000000',
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
        // fontSize: '20px',
      },
      deleteBtn: {
        fontSize: '50px',
        color: '#004e92',
        float: 'right'
      },
      logoutBtn: {
        fontSize: '30px',
        color: '#004e92',
        float: 'right',
        
      },
      settings: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
      },
      tasks: {
        padding: '30px'
      },
      taskCardTitle: {
        fontSize: '20px',
        fontFamily: 'Ubuntu',
        margin: '10px 0',
      },
      taskCardDate: {
        fontSize: '13px',
        fontFamily: 'Ubuntu',
        // color: '#004e92'
      },
      // input: {
      //   backgroundColor: '#ffffff'
      // },
      // todoCard: {
      //   margin: '5px',
      //   minHeight: '200px'
      // },
}))

export default styles;
