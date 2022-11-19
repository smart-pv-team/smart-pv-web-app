import {connect} from 'react-redux';
import Dashboard from "../layouts/dashboard";

function mapStateToProps(state, ownProps) {
  const measurementDevicesNum = state.measurement.devicesNum
  //const consumptionDevicesNum = state.consumption.devicesNum
  const measurementActiveDevicesNum = state.measurement.activeDevicesNum
  //const consumptionActiveDevicesNum = state.consumption.activeDevicesNum
  return {
    measurementDevicesNum,
    measurementActiveDevicesNum
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
