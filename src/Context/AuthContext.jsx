import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider( children ) {
  const [token, settoken] = useState(localStorage.getItem('token'));

  return (
    <AuthContext.Provider value={{ token, settoken }}>
      {children}
    </AuthContext.Provider>
  );
}
