import {connect} from 'react-redux';
import Dashboard from "../layouts/dashboard";
import {setRunning} from "../actions/farmAction";

function mapStateToProps(state, ownProps) {
  const measurementDevicesNum = state.measurement.devicesNum
  const consumptionDevicesNum = state.consumption.devicesNum
  const measurementActiveDevicesNum = state.measurement.activeDevicesNum
  const consumptionActiveDevicesNum = state.consumption.activeDevicesNum
  const usersNum = state.user.usersNum
  const farmName = state.farm.farms[0]?.name
  const farmAlgorithm = state.farm.farms[0]?.algorithmType
  const running = state.farm.farms[0]?.running || false
  return {
    measurementDevicesNum,
    measurementActiveDevicesNum,
    usersNum,
    consumptionDevicesNum,
    consumptionActiveDevicesNum,
    farmName,
    farmAlgorithm,
    running
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setFarmRunning: (running) => dispatch(setRunning(running))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
