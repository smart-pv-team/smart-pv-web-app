import {connect} from "react-redux";
import PriorityAlgorithm from "../../layouts/algorithm/algorithms/priority";
import {setPriorityPower} from "../../actions/consumptionAction";

function mapStateToProps(state, ownProps) {
  const consumptionDevices = state.consumption.devices
  return {
    consumptionDevices
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setPriorityPower: (data) => dispatch(setPriorityPower(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriorityAlgorithm);