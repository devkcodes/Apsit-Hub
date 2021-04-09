import {React,Fragment} from 'react'
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

    return ( <Fragment>
        {alerts !== null && alerts.length > 0 && alerts.map(alert => (
            
        <div key={alert.id} className={classes.alertType} >
            <span>{alert.alertType}</span>
           <Text blockquote size="1.25rem" fontWeight="bold" className={`classes.${alert.alertType}`}>{alert.msg}</Text>
        </div>
    
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


export default connect(mapStatetoprops)(Alert);

//alert component gets state, and then is user to put the message on UI