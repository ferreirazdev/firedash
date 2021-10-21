import { Switch, Route } from 'react-router-dom'
import SignUpPage from "../../components/SignUpPage";
import UsersList from '../../components/UsersList';
import * as ROUTES from '../../constants/routes';

import Firebase, { FirebaseContext } from '../../firebase';

export function Dashboard(){


  return (
    <Switch>
      <FirebaseContext.Provider value={new Firebase()}>
        <Route exact path="/" component={UsersList}/>
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      </FirebaseContext.Provider>
    </Switch>
  )
}