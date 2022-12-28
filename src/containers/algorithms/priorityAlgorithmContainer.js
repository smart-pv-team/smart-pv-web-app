import {connect} from "react-redux";
import PriorityAlgorithm from "../../layouts/algorithm/algorithms/priority";
import {setDevicesPower, setDevicesPriority} from "../../actions/consumptionAction";

function mapStateToProps(state, ownProps) {
  const consumptionDevices = state.consumption.devices
  return {
    consumptionDevices
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setDevicesPower: (data) => dispatch(setDevicesPower(data)),
    setDevicesPriority: (data) => dispatch(setDevicesPriority(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriorityAlgorithm);