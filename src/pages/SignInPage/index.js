import { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';

import {
  Container
} from './styles'

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
    <Container>
      <div className="formWrapper">
        <form onSubmit={onSubmit}>
          <h1>Login</h1>
          <input
            name="email"
            value={email}
            onChange={onChange}
            type="text"
            placeholder="Digite seu e-mail"
          />
          <input
            name="password"
            value={password}
            onChange={onChange}
            type="password"
            placeholder="Digite sua senha"
          />
          <button disabled={isInvalid} type="submit">
            Entrar
          </button>

        </form>
      </div>
    </Container>
  )
}


export default withFirebase(SignInPage);
