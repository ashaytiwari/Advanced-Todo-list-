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
        padding: "100px 100px 0 100px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    greet: {
        color: "#ffffff",
        fontSize: '25px',
        letterSpacing: '4px',
    },
    title: {
        color: '#ffffff',
        fontSize: '35px',
        fontFamily: 'Ubuntu',
        letterSpacing: '4px',
    },
    tree: {
        display: 'none'
    },
    loginSection: {
        padding: '80px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    input: {
        color: '#000000',
        border: 'none',
        borderBottom: '1px solid #004e92',
        borderRadius: '0',
        fontSize: '18px',
        padding: '5px',
        margin: '0  0 20px 0',
        width: '100%',
        outline: 'none',
        fontFamily: 'Ubuntu',
    },
    loginTitle: {
        color: '#004e92',
        fontSize: '35px',
        textAlign: 'center',
        marginBottom: '20px',
        fontFamily: 'Ubuntu'
    },
    loginButton: {
        fontSize: '20px',
        padding: '5px 25px',
        width: '100%',
        border: 'none',
        borderRadius: '25px',
        outline: 'none',
        fontFamily: 'Ubuntu',
        marginTop: '20px'
    },
    checkBox: {
        fontSize: '15px'
    },
    checkLabel: {
        fontSize: '15px',
        fontFamily: 'Ubuntu',
    },
}))

export default styles