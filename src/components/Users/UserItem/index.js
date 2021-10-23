
import { useState, useEffect } from 'react';

import { withFirebase } from "../../../firebase"

function UserItem(props){
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState()

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

  console.log(user)

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
              <span>
                <strong>E-Mail:</strong> {user.email}
              </span>
              <span>
                <strong>Username:</strong> {user.username}
              </span>
              <span>
                <button
                  type="button"
                  
                >
                  Send Password Reset
                </button>
              </span>
            </div>
          )}
        </ul>
      </div>
  )
}

export default withFirebase(UserItem)