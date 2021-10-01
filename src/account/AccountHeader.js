import React from 'react';
import { NavLink } from 'react-router-dom';

function AccountHeader() {
  return (
    <span style={{ float: 'right', marginRight: 120, marginTop: 30 }}>
      <span className="icon-user" />
      <NavLink to="/signin">Sign In</NavLink>
      {/* <>
        <span>Hello, </span>
        &nbsp;&nbsp;
        <a> Sign Out </a>
      </> */}
    </span>
  );
}

export default AccountHeader;
