import {connect} from "react-redux";
import IntervalAlgorithm from "../../layouts/algorithm/algorithms/interval";

function mapStateToProps(state, ownProps) {
  //TODO interval on server side
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(IntervalAlgorithm);