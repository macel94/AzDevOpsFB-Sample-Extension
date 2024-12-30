import React, { useState, useEffect } from 'react';
import * as SDK from 'azure-devops-extension-sdk';
import { AuthContext } from './AuthContext';

export interface UserContext {
  user: SDK.IUserContext | null;
  isLoggedIn: boolean;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<SDK.IUserContext | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        console.log('Initializing Azure DevOps Extension SDK...');
        await SDK.init();
        console.log('SDK initialized successfully!');

        console.log('Fetching current user...');
        const currentUser = await SDK.getUser(); 
        setUser(currentUser);
        console.log('Current user:', currentUser); 
      } catch (error) {
        console.error('Error initializing SDK or fetching user:', error);
      }
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