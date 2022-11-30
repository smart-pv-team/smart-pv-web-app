import {connect} from 'react-redux';
import Dashboard from "../layouts/dashboard";

function mapStateToProps(state, ownProps) {
  const measurementDevicesNum = state.measurement.devicesNum || "Add measurement devices"
  const consumptionDevicesNum = state.consumption.devicesNum || "Add consumption devices"
  const measurementActiveDevicesNum = state.measurement.activeDevicesNum || "No"
  const consumptionActiveDevicesNum = state.consumption.activeDevicesNum || "No"
  const usersNum = state.user.usersNum || "Define users"
  const farmName = state.farm.farms[0]?.name || "Define farm"
  const farmAlgorithm = state.farm.farms[0]?.algorithmType || "No defined algorithm"
  return {
    measurementDevicesNum,
    measurementActiveDevicesNum,
    usersNum,
    consumptionDevicesNum,
    consumptionActiveDevicesNum,
    farmName,
    farmAlgorithm
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
