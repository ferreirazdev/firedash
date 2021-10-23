import { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';

function SignInPage(props){
  const formInititalValues = {
    email: '',
    password: '',
  };

  const [formValues, setFormValues] = useState(formInititalValues)
  const { email, password } = formValues;

  const onSubmit = (e) => {
    props.firebase.doSignInWithEmailAndPassword(email, password).then(() => {
      setFormValues({...formValues})
      props.history.push('/')
    }).catch(error => {
      console.log(error)
    })

    e.preventDefault();
  }

  const onChange = (e) => {
    let { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const isInvalid = password === '' || email === '';
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={email}
          onChange={onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

      </form>
    </div>
  )
}


export default withFirebase(SignInPage);
