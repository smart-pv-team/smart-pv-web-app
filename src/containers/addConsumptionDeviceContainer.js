import {connect} from 'react-redux';
import AddConsumptionDevice from "../layouts/add/consumptionDevice";
import {updateConsumingDevice} from "../actions/consumptionAction";

function mapStateToProps(state, ownProps) {
  const deviceModels = state.farm.deviceModels
  const farmsIds = state.farm.farms.map((farm) => farm.id)
  const devices = state.consumption.devices
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
    updateConsumingDevice: (device) => dispatch(updateConsumingDevice(device))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddConsumptionDevice);