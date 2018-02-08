// This module not in use currently
/* eslint-disable */

import {connect} from "react-redux";
import {handleSignIn, handleSignOut, handleSignUp, handleSubmit} from "./actions";
import AppSign from "./AppSign";
import App from "./App";


function mapDispatchToProps(dispatch) {
  return {
    handleSignIn() {
      dispatch(handleSignIn())
    },
    handleSignOut() {
      dispatch(handleSignOut())
    },
    handleSignUp() {
      dispatch(handleSignUp())
    },
    handleSubmit() {
      dispatch(handleSubmit())
    }
  }
}

export default connect(null, mapDispatchToProps);
