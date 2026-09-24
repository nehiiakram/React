import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = {
    name: "Neha Khan",
    email: "nehakhan29934@gmail.com",
    role: "Student",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};