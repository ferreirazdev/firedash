import React from 'react';
import { Link } from 'react-router-dom';
import FireSvg from './assets/fire.png'

import SignOutButton from '../SignOut';

import { AuthUserContext } from '../../contexts';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { Container } from './styles'

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <Container>
    <div className="navWrapper">
      <div className="routesWrapper">
        <div className="logoImg">
          <img src={FireSvg} alt="logo"/>
        </div> 
        <Link to={ROUTES.HOME}>HOME</Link>
        {authUser.roles.includes(ROLES.ADMIN) && (
          <Link to={ROUTES.ADMIN}>ADMIN</Link>
        )}
      </div>
      <div className="buttonWrapper">
        <SignOutButton />
      </div>
    </div>
  </Container>
);

const NavigationNonAuth = () => (
  <Container>
    <div className="navWrapper">
      <div className="routesWrapper">
        <div className="logoImg">
          <img src={FireSvg} alt="logo"/>
        </div> 
        <Link to={ROUTES.HOME}>HOME</Link>
      </div>
      <div className="signInWrapper">
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </div>
    </div>
  </Container>
);

export default Navigation;