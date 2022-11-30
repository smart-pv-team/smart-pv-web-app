import {connect} from "react-redux";
import Farm from "../layouts/farm";

function mapStateToProps(state, ownProps) {
  const farm = state.farm?.farms[0]
  return {
    farm
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setFarm: (data) => {
    } //TODO
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Farm);