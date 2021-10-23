
import { useState, useEffect } from 'react';
import { withFirebase } from "../../firebase"

import {
  Container,
  UsersWrapper
} from './styles'

function Dashboard(props){
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
  
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));
  
      setLoading(false);
      setUsers(usersList)
    })
  }, [])

  const onDelete = (uid) => {
    props.firebase.db.ref(`users/${uid}`).remove()
  }

  return (
    <Container>
      <UsersWrapper>
        <h2>Usuários</h2>
        {loading && <div>Loading ...</div>}
        <div>
          <div className="categoriesWrapper">
            <div className="categories">
              <h1 className="titleCategories">ID</h1>
              {users.map(user => (
                <div className="infoWrapper" key={user.uid}>
                  <div className="info">
                    <h1>{user.uid}</h1>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="categories">
              <h1 className="titleCategories">NOME</h1>
              {users.map(user => (
                <div className="infoWrapper" key={user.uid}>
                  <div className="info">
                    <h1>{user.username}</h1>
                  </div>
                </div>
              ))}
            </div>

            <div className="categories">
              <h1 className="titleCategories">E-MAIL</h1>
              {users.map(user => (
                <div className="infoWrapper" key={user.uid}>
                  <div className="info">
                    <h1>{user.email}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </UsersWrapper>
    </Container>
  )
}

export default withFirebase(Dashboard)