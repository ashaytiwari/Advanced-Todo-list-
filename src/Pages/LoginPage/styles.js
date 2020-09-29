import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    loginPage: {
        background: '#000428',
        background: '-webkit-linear-gradient(to top right, #000428,#004e92 )',
        background: 'linear-gradient(to top right, #000428,#004e92 )',
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '1px',
        width: '100%'
    },
    loginCard: {
        border: 'none',
        borderRadius: '0',
        padding: '0',
        width: '100%',
        height: '500px',
        marginTop: '70px'
    },
    welcomeSection: {
        background: '#000428',
        background: '-webkit-linear-gradient(to top right, #000428,#004e92 )',
        background: 'linear-gradient(to top right, #000428,#004e92 )',
        height: '500px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: "100px"
    },
    greet: {
        color: "#ffffff",
        fontSize: '35px',
        letterSpacing: '4px',
    },
    title: {
        color: '#ffffff',
        fontSize: '50px',
        fontFamily: 'Ubuntu',
        letterSpacing: '4px',
    },

}))

export default styles