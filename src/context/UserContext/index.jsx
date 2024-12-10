import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ currentUser, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);