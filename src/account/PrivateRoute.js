import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from './useAuth';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();

  // function renderChildrenWithTheseProps(children, props) {}

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.getUser() ? (
          <>
            {React.Children.map(children, (child) =>
              React.cloneElement(child, { ...props })
            )}
          </>
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
