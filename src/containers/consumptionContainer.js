import {connect} from 'react-redux';
import Consumption from "../layouts/consumption";
import {deleteConsumingDevice} from "../actions/consumptionAction";

function mapStateToProps(state, ownProps) {
  const devices = state.consumption.devices
  return {
    devices,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteConsumingDevice: (id) => dispatch(deleteConsumingDevice(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Consumption);