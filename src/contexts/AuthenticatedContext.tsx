import {createContext, useContext, useState} from 'react';

const AuthenticatedContext = createContext({
  changeAuth(token: string) {},
  isAuthenticated: false,
  token: '',
  closeSession() {},
});

export const useAuthenticatedContext = () => {
  return useContext(AuthenticatedContext);
};

export const AuthenticatedProvider = ({children}: any) => {
  const [isAuthenticated, setIsAuth] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');

  const changeAuth = (token: string) => {
    setIsAuth(true);
    setToken(token);
  };

  const closeSession = () => {
    setIsAuth(false);
  };

  return (
    <AuthenticatedContext.Provider
      value={{changeAuth, isAuthenticated, token, closeSession}}>
      {children}
    </AuthenticatedContext.Provider>
  );
};
