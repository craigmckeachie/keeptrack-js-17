import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from './useAuth';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  console.log(children);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.getUser() ? (
          <div>
            {React.Children.map(children, (child) =>
              React.cloneElement(child, { ...props })
            )}
          </div>
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
