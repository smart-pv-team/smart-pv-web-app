import {connect} from "react-redux";
import Farm from "../layouts/farm";
import {addFarm} from "../actions/farmAction";

function mapStateToProps(state, ownProps) {
  const farm = state.farm?.farms[0]
  return {
    farm
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setFarm: (data) => dispatch(addFarm(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Farm);