import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

function SignInPage(){
  return (
    <div>Salve</div>
  )
}


export default withFirebase(SignInPage);
