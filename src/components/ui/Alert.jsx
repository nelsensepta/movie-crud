import React from "react";
import { connect } from "react-redux";
import "./Alert.css";

const Alert = ({ alerts }) => {
  if (alerts !== null && alerts.length > 0) {
    let alertsList;
    alertsList = alerts.map((alert) => {
      return (
        <div className={`alert alert-${alert.alertType}`} key={alert.id}>
          <span className="alert-msg">{alert.msg}</span>
        </div>
      );
    });
    return alertsList;
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  alerts: state.alertReducer,
});

export default connect(mapStateToProps)(Alert);
