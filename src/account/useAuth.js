import React, { useState, useContext, createContext } from 'react';
import jwt_decode from 'jwt-decode';
const baseUrl = 'http://localhost:4000';

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const getToken = () => {
    return localStorage.getItem('auth_token') || null;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (token) => {
    localStorage.setItem('auth_token', token);
    setToken(token);
  };

  const removeToken = () => {
    localStorage.removeItem('auth_token');
    setToken(null);
  };

  const getUser = () => {
    const token = getToken();
    return token ? jwt_decode(token) : null;
  };

  const signin = (email, password) => {
    return fetch(baseUrl + '/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', JSON.stringify(data));
        if (data.success) {
          saveToken(data.access_token);
        }
        return data.success;
      })
      .catch((error) => {
        console.log('Error:', error);
        throw new Error('The email or password you have entered is invalid.');
      });
  };

  const signout = () => {
    removeToken();
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  //   useEffect(() => {
  //     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //       if (user) {
  //         setUser(user);
  //       } else {
  //         setUser(false);
  //       }
  //     });
  //     // Cleanup subscription on unmount
  //     return () => unsubscribe();
  //   }, []);

  // Return the user object and auth methods
  return {
    getToken,
    getUser,
    signin,
    signout,
  };
}
