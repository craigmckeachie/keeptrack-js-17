import React from 'react';

function SignInPage() {
  return (
    <>
      <h1>Sign In</h1>
      <div className="card large error">
        <p>
          <span className="icon-alert inverse" />
        </p>
      </div>
      <form className="input-group vertical" style={{ width: '400px' }}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="email" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="password" />
        <div className="input-group">
          <button className="primary bordered medium">Sign In</button>
        </div>
      </form>
    </>
  );
}

export default SignInPage;
