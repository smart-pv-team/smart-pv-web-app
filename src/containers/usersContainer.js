import {connect} from "react-redux";
import Users from "../layouts/users";
import {deleteUser} from "../actions/roleAction";

function mapStateToProps(state, ownProps) {
  const {users} = state.user
  return {
    users,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteUser: (uid) => dispatch(deleteUser(uid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);