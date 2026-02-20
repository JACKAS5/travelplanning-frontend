// context/UserContext.tsx
import { createContext, useContext } from "react";
import type { User } from "../utils/mockUser";
import { mockUser } from "../utils/mockUser";

const UserContext = createContext<User>(mockUser);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <UserContext.Provider value={mockUser}>{children}</UserContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);
