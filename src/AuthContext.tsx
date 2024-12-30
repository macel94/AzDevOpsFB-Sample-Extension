import React, { createContext, useState, useEffect } from 'react';
import * as SDK from 'azure-devops-extension-sdk';

interface UserContext {
  user: SDK.IUserContext | null;
  isLoggedIn: boolean;
}

const initialUserContext: UserContext = {
  user: null,
  isLoggedIn: false,
};

export const AuthContext = createContext<UserContext>(initialUserContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { // Add children prop here
  const [user, setUser] = useState<SDK.IUserContext | null>(null);

  useEffect(() => {
    const init = async () => {
      await SDK.init();
      const currentUser = await SDK.getUser(); 
      setUser(currentUser);
    };
    init();
  }, []);

  const value = {
    user,
    isLoggedIn: !!user, 
  };

  return (
    <AuthContext.Provider value={value}>
      {children} 
    </AuthContext.Provider>
  );
};