import {connect} from 'react-redux';
import Measurement from "../layouts/mesurement";
import {deleteMeasuringDevice} from "../actions/measurementAction";

function mapStateToProps(state, ownProps) {
  const devices = state.measurement.devices
  return {
    devices,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteMeasuringDevice: (id) => dispatch(deleteMeasuringDevice(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Measurement);