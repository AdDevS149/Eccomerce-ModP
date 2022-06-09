import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
//   const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false)

  return (
  <AuthContext.Provider value={{ auth, setAuth }}>
  {children}
  </AuthContext.Provider>
  )
};

export default AuthContext;
//only will hold the boolean as to whether the site is trusted or not
// not storing on authToken in local storage
//just getting persist value
