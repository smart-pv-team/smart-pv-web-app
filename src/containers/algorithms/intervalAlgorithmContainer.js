import {connect} from "react-redux";
import IntervalAlgorithm from "../../layouts/algorithm/algorithms/interval";
import {addInterval, addRule, deleteInterval, deleteRule} from "../../actions/algorithmAction";

function mapStateToProps(state, ownProps) {
  const intervals = state.algorithm.intervals
  const rules = state.algorithm.rules
  const devices = state.consumption.devices
  return {
    intervals,
    rules,
    devices
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteInterval: (id) => dispatch(deleteInterval(id)),
    deleteRule: (id) => dispatch(deleteRule(id)),
    addInterval: (data) => dispatch(addInterval(data)),
    addRule: (data) => dispatch(addRule(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntervalAlgorithm);