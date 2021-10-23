import React from 'react';

import { withFirebase } from '../../firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sair
  </button>
);

export default withFirebase(SignOutButton);