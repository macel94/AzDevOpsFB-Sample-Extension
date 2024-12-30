import { createContext } from 'react';
import { UserContext } from './AuthProvider';
import { initialUserContext } from './initialUserContext';


export const AuthContext = createContext<UserContext>(initialUserContext);
