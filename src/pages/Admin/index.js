import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthorization } from '../../contexts';
import UserList from '../../components/Users/UsersList';
import UserItem from '../../components/Users/UserItem';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

import { Link } from 'react-router-dom';
import { AuthUserContext } from '../../contexts';

const AdminPage = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <AdminPageAuth authUser={authUser} />
      ) : (
        <AdminPageNone />
      )
    }
  </AuthUserContext.Consumer>
);

const AdminPageAuth = ({ authUser }) => (
  <div>
    {authUser.roles.includes(ROLES.ADMIN) && (
      <Switch>
        <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
        <Route exact path={ROUTES.ADMIN} component={UserList} />
      </Switch>
    )}
    
  </div>
);

const AdminPageNone = () => (
  <div>
    <h1>Admin</h1>
    <p>Essa página é acessível apenas para o Admin</p>

    <div>Volte para a área autorizada</div>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
  </div>
);

export default AdminPage;