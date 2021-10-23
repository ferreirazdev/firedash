import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import { withAuthentication } from './contexts';
import Dashboard from "./pages/Dashboard";
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import AdminPage from './pages/Admin'
import Navigation from './components/Navigation';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={ROUTES.HOME} component={Dashboard} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      <Route exact path={ROUTES.ADMIN_DETAILS} component={AdminPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
