import {connect} from 'react-redux';
import Measurement from "../layouts/mesurement";

function mapStateToProps(state, ownProps) {
  const devices = state.measurement.devices
  return {
    devices,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Measurement);