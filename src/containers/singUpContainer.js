import {connect} from 'react-redux';
import {singUp} from "../actions/userAction";
import Cover from "../layouts/authentication/sign-up";

function mapStateToProps(state) {
  const singUpError = state.singUpScreen.singUpError
  return {
    singUpError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    singUp: (email, password, name, navigate) => {
      dispatch(singUp(email, password, name, navigate));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cover);
