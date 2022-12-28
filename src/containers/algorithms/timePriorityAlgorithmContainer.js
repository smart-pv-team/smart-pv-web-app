import {connect} from "react-redux";
import TimePriorityAlgorithm from "../../layouts/algorithm/algorithms/timepriority";
import {setDevicesPower} from "../../actions/consumptionAction";

function mapStateToProps(state, ownProps) {
  const consumptionDevices = state.consumption.devices
  return {
    consumptionDevices
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setDevicesPower: (data) => dispatch(setDevicesPower(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimePriorityAlgorithm);