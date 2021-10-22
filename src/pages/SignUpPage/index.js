import { useState } from 'react';

import { withFirebase } from '../../firebase';
import * as ROLES from '../../constants/roles';

function SignUpPage(props){
  const formInititalValues = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: false,
    error: null,
  };

  const [formValues, setFormValues] = useState(formInititalValues)
  const { username, email, passwordOne, passwordTwo, isAdmin } = formValues;
  
  const onSubmit = (e) => {
    const roles = [];

    if(isAdmin) {
      roles.push(ROLES.ADMIN)
    }

    props.firebase.doCreateUserWithEmailAndPassword(
      email, passwordOne
    ).then(authUser => {
      props.firebase.user(authUser.user.uid).set({
        username,
        email,
        roles,
      }).then(() => {
        setFormValues({...formValues})
        props.history.push('/');
      }).catch(error => {
        console.log(error)
      });
    }).catch(error => {
      console.log(error)
    });

    e.preventDefault();
  }

  const onChange = (e) => {
    let { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onChangeCheckbox = (e) => {
    let { name, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: checked,
    })
  }

  const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          value={username}
          onChange={onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <label>
          Admin:
          <input
            name="isAdmin"
            type="checkbox"
            checked={isAdmin}
            onChange={onChangeCheckbox}
          />
        </label>
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        
      </form>
    </div>
  )
}

export default withFirebase(SignUpPage);