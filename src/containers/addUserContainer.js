import {connect} from "react-redux";
import AddUser from "../layouts/add/user";
import {addUser} from "../actions/roleAction";

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addUser: (name, email, password) => dispatch(addUser(name, email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);