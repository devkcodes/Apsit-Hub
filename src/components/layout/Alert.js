import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
    </div>
));
Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}
const mapStatetoprops = state => ({
    alerts: state.alert
});

export default connect(mapStatetoprops)(Alert);

//alert component gets state, and then is user to put the message on UI