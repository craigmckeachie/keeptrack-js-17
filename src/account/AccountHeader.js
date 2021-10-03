import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from './useAuth';

function AccountHeader() {
  const history = useHistory();
  const auth = useAuth();

  return (
    <span style={{ float: 'right', marginRight: 120, marginTop: 30 }}>
      <span className="icon-user" />
      {auth.getUser() ? (
        <>
          <span>Hello, {auth.getUser().email} </span>
          &nbsp;&nbsp;
          <button
            className="buttonLink"
            onClick={() => {
              auth.signout();
              history.push('/');
            }}
          >
            Sign Out
          </button>
        </>
      ) : (
        <NavLink to="/signin">Sign In</NavLink>
      )}
    </span>
  );
}

export default AccountHeader;
