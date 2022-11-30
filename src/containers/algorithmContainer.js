import {connect} from "react-redux";
import Algorithm from "../layouts/algorithm";

function mapStateToProps(state, ownProps) {
  //TODO get algorithms from server
  const algorithms = [
    {
      name: "Priority",
      description: "Algorithm that base on device priority and power. Favour devices with higher priority. Handle only on/off actions",
      path: "/priority"
    },
    {
      name: "Time-Priority",
      description: "Algorithm that base on device power. Favour devices with longest inactive time. Handle only on/off actions",
      path: "/time-priority"
    },
    {
      name: "Random",
      description: "Algorithm that base on device power. Handle only on/off actions",
      path: "/random"
    },
    {
      name: "Interval",
      description: "Algorithm that base on actions with specified intervals. Handle all actions",
      path: "/interval"
    }
  ]
  return {
    algorithms
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Algorithm);