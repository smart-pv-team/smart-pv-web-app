import {connect} from "react-redux";
import RandomAlgorithm from "../../layouts/algorithm/algorithms/random";
import {setPriority} from "../../actions/consumptionAction";

function mapStateToProps(state, ownProps) {
  const consumptionDevices = state.consumption.devices
  return {
    consumptionDevices
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setPriority: (data) => setPriority(data)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomAlgorithm);