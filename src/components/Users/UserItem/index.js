
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { withFirebase } from "../../../firebase"

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
    <div>
        <h2>Users</h2>
        {loading && <div>Loading ...</div>}
        <ul>
          {user && (
            <div>
              <span>
                <strong>ID:</strong> {user.uid}
              </span>
              <form onSubmit={onSubmit}>
                <div>
                  <strong>Nome:</strong> {user.username}
                  <input
                    name="username"
                    value={username}
                    onChange={onChange}
                    type="text"
                    placeholder={user.username}
                  />
                </div>
                <div>
                  <strong>E-Mail:</strong> {user.email}
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
        </ul>
      </div>
  )
}

export default withFirebase(UserItem)