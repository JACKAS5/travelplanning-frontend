import { useState } from "react";
import { getUser, isLoggedIn as authCheck, logout as authLogout } from "../utils/fakeAuth";

export const useAuth = () => {
  const [user, setUser] = useState(getUser());

  const logout = () => {
    authLogout();
    setUser(null);
    window.location.href = "/"; // redirect home
  };

  return {
    user,
    isLoggedIn: authCheck(),
    logout,
  };
};
