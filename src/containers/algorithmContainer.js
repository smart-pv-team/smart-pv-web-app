import {connect} from "react-redux";
import Algorithm from "../layouts/algorithm";
import {setAlgorithm} from "../actions/farmAction";

function mapStateToProps(state, ownProps) {

  const algorithms = [
    {
      name: "POWER_PRIORITY",
      description: "Algorithm that base on device priority and power. Favour devices with higher priority. Handle only on/off actions",
      path: "/priority"
    },
    {
      name: "POWER_TIME_PRIORITY",
      description: "Algorithm that base on device power. Favour devices with longest inactive time. Handle only on/off actions",
      path: "/time-priority"
    },
/*    {
      name: "RANDOM",
      description: "Algorithm that base on device power. Handle only on/off actions",
      path: "/random"
    },*/
    {
      name: "INTERVAL",
      description: "Algorithm that base on actions with specified intervals. Handle all actions",
      path: "/interval"
    }
  ]
  const algorithm = state.farm.farms[0]?.algorithmType || "POWER_TIME_PRIORITY"

  return {
    algorithms,
    algorithm
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setAlgorithm: (algorithm) => dispatch(setAlgorithm(algorithm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Algorithm);