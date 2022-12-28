import {connect} from 'react-redux';
import AddMeasurementDevice from "../layouts/add/measurementDevice";
import {addMeasuringDevice} from "../actions/measurementAction";

function mapStateToProps(state, ownProps) {
  const deviceModels = state.farm.deviceModels
  const farmsIds = state.farm.farms.map((farm) => farm.id)
  const devices = state.measurement.devices
  const responseOptions = state.farm.responseOptions
  return {
    deviceModels,
    farmsIds,
    devices,
    responseOptions
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addMeasuringDevice: (data) => dispatch(addMeasuringDevice(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMeasurementDevice);