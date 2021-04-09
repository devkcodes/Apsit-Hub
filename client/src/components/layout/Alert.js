import {React,Fragment,useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import "./Alert.css"
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import { Text, Divider,Button,Avatar,Fieldset,Badge,Tooltip } from '@geist-ui/react' 
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        color: 'white'
    },
    danger:{
        // marginTop:"80px",
        color:"#721C24",
        backgroundColor:"#F8D7DA",
        height:"60px",
        padding:"1px"
    },
    success:{
        marginTop:"80px",
        color:"#155724",
        backgroundColor:"#D4EDDA"
    }
}));


export const Alert = ({ alerts }) => {
    const classes = useStyles();
    // const [alerttype, setalerttype] = useState('danger')
    return ( <Fragment>
        {alerts !== null && alerts.length > 0 && alerts.map(alert => (
    
       
    <AlertDiv alert ={alert}/>
    
    ))}
    </Fragment>
    )
} 

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}
const mapStatetoprops = state => ({
    alerts: state.alert
});

const AlertDiv = ({alert:{id,msg,alertType}}) =>{
        const classes = useStyles();

        return (
             <div  key={alert.id} className={classes[alertType]} >
            
            <Text blockquote size="1.25rem" fontWeight="bold" className={`classes.${alert.alertType}`}>{msg}</Text>
        </div>
        )
}  

export default connect(mapStatetoprops)(Alert);

//alert component gets state, and then is user to put the message on UI