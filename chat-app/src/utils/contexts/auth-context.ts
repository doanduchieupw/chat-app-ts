import { createContext } from 'react';
import { User } from '../types/auth';

type AuthContextType = {
  user?: User;
  updateAuthUser: (data: any) => void;
};

export const AuthContext = createContext<AuthContextType>({
  updateAuthUser: () => {},
});
