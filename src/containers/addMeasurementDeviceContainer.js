import {connect} from 'react-redux';
import AddMeasurementDevice from "../layouts/add/measurementDevice";

function mapStateToProps(state, ownProps) {
  const deviceModels = state.farm.deviceModels
  const farmsIds = state.farm.farms.map((farm) => farm.id)
  return {
    deviceModels,
    farmsIds
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMeasurementDevice);