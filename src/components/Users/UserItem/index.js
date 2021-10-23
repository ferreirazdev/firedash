
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { withFirebase } from "../../../firebase"
import {
  Container
} from './styles'

function UserItem(props){
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState()

  const formInititalValues = {
    username: '',
    email: '',
  };

  const [formValues, setFormValues] = useState(formInititalValues)
  const { username, email } = formValues;

  useEffect(() => {
    props.firebase.user(props.match.params.id).on('value', snapshot => {
      const snapUser = snapshot.val()
      
      setUser(snapUser)
      setLoading(false)
    })
  }, [])

  const onDelete = (uid) => {
    props.firebase.db.ref(`users/${uid}`).remove()
  }

  let currentId = useParams();
  const { id } = currentId
  console.log(id)

  const onSubmit = (e) => {
    props.firebase.db.ref(`users/${id}`).set(formValues).then(() => {
      setFormValues({...formValues})
      props.history.push('/admin')
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

  return (
    <Container>
      <div className="dataWrapper">
        <h2>Atualize os dados do usuário</h2>
          {loading && <div>Loading ...</div>}
          <div>
            {user && (
              <div>
                <form onSubmit={onSubmit}>
                  <div className="infoData">
                    <div>
                      <span>Nome:</span>
                      <h1>{user.username}</h1>
                    </div>
                    <input
                      name="username"
                      value={username}
                      onChange={onChange}
                      type="text"
                      placeholder={user.username}
                    />
                  </div>
                  <div className="infoData">
                    <div>
                      <span>E-Mail:</span>
                      <h1>{user.email}</h1>
                    </div>
                    <input 
                      name="email"
                      value={email}
                      onChange={onChange}
                      type="text"
                      placeholder={user.email}
                    />
                  </div>
                  <button type="submit">Atualizar Dados</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </Container>
  )
}

export default withFirebase(UserItem)