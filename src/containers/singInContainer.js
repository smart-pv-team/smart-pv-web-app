import Basic from "../layouts/authentication/sign-in";
import {singIn} from "../actions/userAction";
import {connect} from 'react-redux';

function mapStateToProps(state) {
  const singInError = state.singInScreen.singInError
  return {
    singInError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    singIn: (email, password) => {
      dispatch(singIn(email, password));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basic);
