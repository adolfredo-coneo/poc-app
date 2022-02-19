import { User } from '../models/User';

export interface AuthContextType {
  user: User | null;
  signin: (user: User, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}
