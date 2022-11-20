import {connect} from 'react-redux';
import AddMeasurementDevice from "../layouts/add/measurementDevice";

function mapStateToProps(state, ownProps) {
  const deviceModels = state.farm.deviceModels
  const farmsIds = state.farm.farms.map((farm) => farm.id)
  const devices = state.measurement.devices
  return {
    deviceModels,
    farmsIds,
    devices
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMeasurementDevice);