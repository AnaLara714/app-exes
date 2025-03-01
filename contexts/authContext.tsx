import React, { createContext, ReactNode, useContext } from "react";

interface User {
  id: number;
  password: string;
}

interface IAuth {
  user: User | null;
  login: (userDara: User) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuth | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
