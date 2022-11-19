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
    singIn: (email, password, navigate) => {
      dispatch(singIn(email, password, navigate));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basic);
