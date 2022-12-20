import {connect} from 'react-redux';
import AddMeasurementDevice from "../layouts/add/measurementDevice";
import {addNewMeasuringDevice} from "../actions/measurementAction";
import AddConsumptionDevice from "../layouts/add/consumptionDevice";

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
    /*addNewDevice: (data) => dispatch(addNewConsumptionDevice(data))*/
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddConsumptionDevice);